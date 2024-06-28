window.onload = () => {
    getDadosMaterial();
}

function getDadosMaterial() {
    const material = window.location.search.split("=")[1];


    fetch(`http://localhost:3000/parceiros?materialReciclagem=${material}`)
        .then(res => res.json())
        .then(listaMaterial => {
            listaMaterial.map(material => {
                document.getElementById("info-material").innerHTML = `
                <h5 class="ecotrade-page-title">${material.materialReciclagem.toUpperCase()}</h5>
                <div class="d-flex justify-content-center mt-4">
                    <img src="${material.imgSrc}" alt="${material.materialReciclagem}" width="400">
                    <div class="text-box col-md-5 ms-4">
                        <p>${material.nome}</p>
                        <br>
                        <p>Endereço: ${material.endereco}</p>
                        <p>Funcionamento: ${material.funcionamento}</p>
                        <p>Contato: ${material.contato}</p>
                    </div>
                </div>`
            });
        });


}