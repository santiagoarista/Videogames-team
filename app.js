"use strict"

import bcrypt from 'bcrypt' //Password hashing
// Importing modules
import express from 'express'

// The mysql2/promise module is used to connect to the MySQL database. The promise version of the module is used to avoid the use of callbacks and instead use the async/await syntax.
import mysql from 'mysql2/promise'
import fs from 'fs'

const app = express()
const port = 3001

app.use(express.json())
app.use(express.static('./game'))
app.use('/fonts', express.static('fonts'))

// Function to connect to the MySQL database
async function connectToDB()
{
    return await mysql.createConnection({
        host:'localhost',
        user:'root', // Cambiar user y constraseña si quieren usarlo
        password:'Hopecos@123',
        database:'nineshions'
    })
}

// Routes definition and handling
app.get('/', (req, res) => {
    fs.readFile('game/html/principal_menu.html', 'utf8', (err, html) => {
        if (err) res.status(500).send('Error loading file: ' + err)
        else res.send(html)
    })
})


//Auth system - get users
app.get('/api/Usuario', async (req, res) => {
    let connection = null;
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ error: 'Porfavor ingrese un correo' });
    }

    try {
        connection = await connectToDB();
        const [rows] = await connection.query('SELECT * FROM Usuario WHERE correo = ?', [email]);

        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).json({ message: 'No existe un usuario con este correo' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error DB', details: error });
    } finally {
        if (connection) connection.end();
    }
});

//Create new user API
app.post('/api/Usuario', async (req, res) => {
    let connection = null;
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Se necesita un correo y una contraseña' });
    }

    try {
        connection = await connectToDB();

        const [result] = await connection.query('INSERT INTO Usuario (correo, contrasena) VALUES (?, ?)', [email, password]);

        res.status(201).json({ message: 'Usuario registrado!', id: result.insertId });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error DB', details: error });
    } finally {
        if (connection) connection.end();
    }
});


//User create account
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const connection = await connectToDB()

        const [existing] = await connection.execute('SELECT * FROM Usuario WHERE email = ?', [email])
        if (existing.length > 0) {
            return res.status(409).json({ error: 'Email already registered' })
        }

        const [result] = await connection.execute(
            'INSERT INTO Usuario (email, password) VALUES (?, ?)',
            [email, hashedPassword]
        )

        res.status(201).json({ message: 'User registered', userId: result.insertId })

        connection.end()
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Server error' })
    }
})

//User login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' })
    }

    try {
        const connection = await connectToDB()
        const [users] = await connection.execute(
            'SELECT * FROM Usuario WHERE email = ?',
            [email]
        )

        if (users.length === 0) {
            return res.status(401).json({ error: 'User not found' })
        }

        const user = users[0]
        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        // Generate JWT
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h'
        })

        res.status(200).json({ message: 'Login successful', token })
        connection.end()
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Server error' })
    }
})



// Insert a new map into the database
app.post('/api/Partida', async (req, res) => {
    let connection = null;

    try {
        connection = await connectToDB();

        const {
            id_usuario,
            monstruos_eliminados,
            puntuacion,
            vidas,
            llaves_encontradas,
            items_encontrados,
            listaCuartosAleatorios, 
            terminada
        } = req.body;

        const partidaData = {
            id_usuario,
            monstruos_eliminados,
            puntuacion,
            vidas,
            llaves_encontradas: JSON.stringify(llaves_encontradas),
            items_encontrados: JSON.stringify(items_encontrados),
            mapa: JSON.stringify(listaCuartosAleatorios),
            terminada
        };

        const [results] = await connection.query('INSERT INTO Partida SET ?', partidaData);

        console.log(`${results.affectedRows} row inserted`);
        res.status(201).json({ message: "Data inserted correctly.", id: results.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error", details: error });
    } finally {
        if (connection) {
            connection.end();
            console.log("Connection closed successfully!");
        }
    }
});

//Obtener partidas sin terminar
app.get('/api/Partida/active/:id_usuario', async (req, res) => {
    let connection = null;
    try {
        connection = await connectToDB();
        const { id_usuario } = req.params;

        const [results] = await connection.query(
            'SELECT * FROM Partida WHERE id_usuario = ? AND terminada = 0 ORDER BY id_partida DESC LIMIT 1',
            [id_usuario]
        );

        if (results.length === 0) {
            return res.status(404).json({ message: "No partida activa encontrada." });
        }

        res.json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    } finally {
        if (connection) connection.end();
    }
});


app.listen(port, ()=>
{
    console.log(`App listening at http://localhost:${port}`)
})