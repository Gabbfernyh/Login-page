javascript
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar tu lógica de autenticación
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').textContent = '¡Bienvenido!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Usuario o contraseña incorrectos.';
    }
    ocument.querySelector('button[type="submit"]').addEventListener('click', function(event) {
        event.preventDefault(); // Evita o envio do formulário
    
        const checkbox = document.getElementById('robot-check');
        const messageDiv = document.getElementById('message');
    
        if (checkbox.checked) {
            messageDiv.textContent = 'Login com sucesso!';
            messageDiv.className = 'success'; // Adiciona classe de sucesso
        } else {
            messageDiv.textContent = 'Erro no login: você deve confirmar que não é um robô.';
            messageDiv.className = ''; // Remove a classe de sucesso
        }
    
        messageDiv.style.display = 'block'; // Mostra a mensagem
    });
});
