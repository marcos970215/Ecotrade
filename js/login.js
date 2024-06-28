
function validarForm() {
    const dadosLogin = {
        email: document.getElementById('floatingUserInput').value,
        senha: document.getElementById('floatingPassword').value
    }

    if (dadosLogin) {
        getUsers(dadosLogin);
    }
}

function getUsers(dadosLogin) {

    fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(data => login(data, dadosLogin));
}

function login(listaUsuarios, dadosLogin) {

    try {
        const emailChecked = listaUsuarios.find(({ email }) => (dadosLogin.email == email));

        if (emailChecked) {
            if (emailChecked.senha == dadosLogin.senha) {
                window.localStorage.setItem('ecotrade-auth', emailChecked.id);
                window.location.assign('/');
            } else {
                throw "Senha inválida."
            }
        } else {
            throw "Usuário não cadastrado."
        }
    }
    catch (msgErro) {
        window.alert(msgErro);
    }

}
