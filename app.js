"use strict"

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
        user:'root', // Cambiar user si quieren usarlo
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

app.get('/', (request,response)=>{
    fs.readFile('game/html/in_game_screen.html', 'utf8', (err, html)=>{
        if(err) response.status(500).send('There was an error: ' + err)
        console.log('Loading page...')
        response.send(html)
    })
})



app.get('/api/Usuario', async (request, response)=>{
    let connection = null

    try
    {
        connection = await connectToDB()
        const [results, fields] = await connection.execute('select * from Usuario')

        console.log(`${results.length} rows returned`)
        console.log(results)
        response.json(results)
    }
    catch(error)
    {
        response.status(500)
        response.json(error)
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})



// Insert a new map into the database and return a JSON object with the id of the new Partida
// app.post('/api/Partida', async (request, response)=>{

//     let connection = null

//     try
//     {    
//         connection = await connectToDB()

//         const partidaData = {
//             id_usuario: 1000,
//             monstruos_eliminados: 10,
//             puntuacion: 100,
//             llaves_encontradas: [true, false, false, true, false, false, false, false, true],
//             items_encontrados: [true, false, true],
//             mapa: JSON.stringify(listaCuartosAleatorios)
//         }

//         const [results, fields] = await connection.query('insert into Partida set ?', partidaData)
        
//         console.log(`${results.affectedRows} row inserted`)
//         response.status(201).json({ message: "Data inserted correctly.", id: results.insertId })
//     }
//     catch(error)
//     {
//         response.status(500)
//         response.json(error)
//         console.log(error)
//     }
//     finally
//     {
//         if(connection!==null) 
//         {
//             connection.end()
//             console.log("Connection closed succesfully!")
//         }
//     }
// })

app.listen(port, ()=>
{
    console.log(`App listening at http://localhost:${port}`)
})