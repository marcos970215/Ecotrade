window.onload = function () {

    getDadosUsuario();

    function getDadosUsuario() {

        const idUserLogado = localStorage.getItem("ecotrade-auth");

        fetch(`http://localhost:3000/users?id=${idUserLogado}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                data.map(userData => {
                    document.getElementById('nome').value = userData?.nome || "";
                    document.getElementById('cpf').value = userData?.cpf || "";
                    document.getElementById('email').value = userData?.email || "";
                    document.getElementById('telefone').value = userData?.telefone || "";
                    document.getElementById('cep').value = userData?.cep || "";
                    document.getElementById('endereco').value = userData?.endereco || "";
                    document.getElementById('bairro').value = userData?.bairro || "";
                    document.getElementById('cidade').value = userData?.cidade || "";
                })

            });
    }
}

function getEndereco(e) {
    const cepDigitado = e.value;
    if (cepDigitado) {

        try {
            fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => {
                    if (!data.erro) {
                        document.getElementById('endereco').value = data?.logradouro;
                        document.getElementById('bairro').value = data?.bairro;
                        document.getElementById('cidade').value = data?.localidade;
                    }
                })
                .catch(err => {
                    console.log('err', err);
                })
        } catch (exception) {

        }
    }
}

function atualizarDados() {

    const idUserLogado = localStorage.getItem("ecotrade-auth");

    const dadosForm = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value
    }

    if (dadosForm) {
        fetch(`http://localhost:3000/users/${idUserLogado}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosForm)
        })
            .then(res => res.json())
            .then(() => {
                window.alert("Dados atualizados com sucesso!")
                window.location.assign('info-cadastro.html')
            });
    }
}
