document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const registerButton = document.querySelector('button');
    const messageElement = document.getElementById('registerMessage');
    const goToLoginButton = document.getElementById('goToLoginButton');

    registerButton.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            messageElement.textContent = 'Porfavor ingrese un correo y una contraseña para continuar';
            messageElement.style.display = 'block';
            return;
        }

        try {
            // 1. Check if user already exists
            const checkResponse = await fetch(`http://localhost:3001/api/Usuario?email=${encodeURIComponent(email)}`);
            
            if (checkResponse.ok) {
                // User exists
                messageElement.textContent = 'Ya existe un usuario con este correo.';
                messageElement.style.display = 'block';
                goToLoginButton.style.display = 'inline-block';
                return;
            }

            // 2. Register new user
            const createResponse = await fetch('http://localhost:3001/api/Usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (createResponse.ok) {
                alert('Se ha creado una cuenta con su información!'); 
                window.location.href = "/html/login_screen.html"; //Ir a login screen
            } else {
                const errorData = await createResponse.json();
                console.error(errorData);
                alert('Error. Intente otra vez');
            }

        } catch (error) {
            console.error(error);
            alert('Error. Intente otra vez');
        }

        
    });
    
    // Hides the message and login button when typing a new email
    emailInput.addEventListener('input', () => {
        messageElement.style.display = 'none';
        goToLoginButton.style.display = 'none';
    });

    passwordInput.addEventListener('input', () => {
        messageElement.style.display = 'none';
        goToLoginButton.style.display = 'none';
    });

    // 👇 Redirect to login screen when button is clicked
    goToLoginButton.addEventListener('click', () => {
        window.location.href = "/html/login_screen.html";
    });
});