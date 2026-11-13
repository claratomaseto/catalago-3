const container = document.querySelector('.todosCards');

if (container) {
    fetch('/api/lista')
        .then((resposta) => resposta.json())
        .then((dados) => {
            container.innerHTML = '';

            dados.forEach(item => {
                container.innerHTML += `
                <div class="card">
                    <div class="texto">
                        <h3>${item.codinome}</h3>
                        <p><strong>Nome:</strong> ${item.nome}</p>
                        <p><strong>Tipo:</strong> ${item.tipo}</p>
                        <p><strong>Status:</strong> ${item.status}</p>
                        <p><strong>Localização:</strong> ${item.localizacao}</p>
                    </div>
                    <div class="img">
                        <img src="${item.imagem}" alt="Imagem de ${item.codinome}">
                    </div>
                </div>
                `;
            });
        })
        .catch((erro) => console.error("Erro ao buscar os dados:", erro));
}