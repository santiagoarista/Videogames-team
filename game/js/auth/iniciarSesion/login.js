document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('registerButton');
    const messageElement = document.getElementById('loginMessage');
    const goToHomeButton = document.getElementById('goToHomeButton');

    loginButton.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            messageElement.textContent = 'Porfavor ingrese un correo y una contraseña para continuar';
            messageElement.style.display = 'block';
            return;
        }

        try {
            // Check if user exists
            const response = await fetch(`http://localhost:3001/api/Usuario?email=${encodeURIComponent(email)}`);
            
            if (!response.ok) {
                messageElement.textContent = 'No existe un usuario con este correo';
                messageElement.style.display = 'block';
                goToHomeButton.style.display = 'inline-block';
                return;
            }

            const userData = await response.json();

            // Validate password
            if (userData.contrasena !== password) {
                messageElement.textContent = 'Contraseña incorrecta. Intente de nuevo';
                messageElement.style.display = 'block';
                return;
            }

            // Login successful — redirect
            localStorage.setItem('id_usuario', userData.id_usuario); //Guardar id_usuario en local storage para poder usarlo más adelante
            console.log(userData.id_usuario)
            window.location.href = '/html/play_screen.html'; 

        } catch (error) {
            console.error(error);
            alert('Ocurrió un error al intentar iniciar sesión.');
        }
    });

    // Hides the message and Create acc button when typing a new email
    emailInput.addEventListener('input', () => {
        messageElement.style.display = 'none';
        goToHomeButton.style.display = 'none';
    });
    // Hides the message and Create acc button when typing a new email
    passwordInput.addEventListener('input', () => {
        messageElement.style.display = 'none';
        goToHomeButton.style.display = 'none';
    });

    // 👇 Redirect to create acc screen when button is clicked
    goToHomeButton.addEventListener('click', () => {
        window.location.href = "/html/home_screen.html";
    });

});
