// javascript

function validarLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Logica de autenticação simples
    if (username === 'admin' && password === 'password') {
        const checkbox = document.getElementById('robot-check');

        if (checkbox.checked === true) {
            document.querySelector('#message').textContent = 'Login com sucesso!';
            document.querySelector('#message').style.color = 'green';
        } else {
            document.querySelector('#message').textContent = 'Erro no login: você deve confirmar que não é um robô.';
            document.querySelector('#message').style.color = 'red';
        }
    } else {
        document.querySelector('#message').textContent = 'Usuario e/ou senha encontra-se incorretos.';
        document.querySelector('#message').style.color = 'red';
    }

    document.querySelector('#message').style.display = 'block';
}
