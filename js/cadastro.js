function validarFormCadastro() {
    const dadosCadastro = {
        nome: document.getElementById('nomeInput').value,
        email: document.getElementById('emailInput').value,
        telefone: document.getElementById('telefoneInput').value,
        senha: document.getElementById('senhaInput').value
    }

    if (dadosCadastro) {
        testarUsuarioCriado(dadosCadastro);
    }
}

function testarUsuarioCriado(dadosCadastro) {

    fetch(`http://localhost:3000/users?email=${dadosCadastro.email}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(data => {
            try {
                if (data && data.length > 0) {
                    throw "E-mail já cadastrado!"
                } else {
                    criarNovoUsuario(dadosCadastro);
                }
            } catch (exception) {
                window.alert(exception);
            }
        });
}

function criarNovoUsuario(dadosCadastro) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosCadastro)
    })
        .then(res => res.json())
        .then(data => loginERedirect(data));
}

function loginERedirect(dadosUsuario) {
    window.localStorage.setItem('ecotrade-auth', dadosUsuario.id);
    window.location.assign('atualizar-cadastro.html')
}

