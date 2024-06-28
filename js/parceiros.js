window.onload = () => {
    listarOpcoesFiltros()
}

const getParceiros = fetch("http://localhost:3000/parceiros");

getParceiros.then(res =>
    res.json()).then(parceiros => {
        document.getElementById("parceiros").innerHTML = parceiros.map(parceiro => `
      <div class="text-box col-md-5 me-4 mb-4">
        <p>${parceiro.nome}</p>
        <br>
        <p>Endereço: ${parceiro.endereco}</p>
        <p>Funcionamento: ${parceiro.funcionamento}</p>
        <p>Contato: ${parceiro.contato}</p>
      </div>`);
    });


function listarOpcoesFiltros() {
    const listaFiltros = ["METAL", "PAPEL", "PLÁSTICO", "VIDRO"];

    document.getElementById("opcoes-filtros").innerHTML = listaFiltros.map((material) =>
        `<button type="submit" class="btn btn-lg ecotrade-btn-secondary me-2" onclick=redirectMaterial("${material}")>
        ${material}
      </button>`).join('');
}

function redirectMaterial(material) {
    redirect(`material.html?material=${material.toLowerCase()}`)
}
