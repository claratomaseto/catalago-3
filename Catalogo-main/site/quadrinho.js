class Quadrinho {
    constructor(titulo, ano_publicacao) {
        this.titulo = titulo;
        this.ano_publicacao = ano_publicacao;
    }
}

const formularioQuadrinho = document.getElementById('formQuadrinho');

if (formularioQuadrinho) {
    formularioQuadrinho.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const ano_publicacao = document.getElementById('anoPublicacao').value;

        const novoQuadrinho = new Quadrinho(titulo, ano_publicacao);

        fetch('/api/quadrinhos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoQuadrinho)
        })
        .then(resposta => resposta.json())
        .then(() => {
            alert('Quadrinho cadastrado com sucesso!');
            formularioQuadrinho.reset();
            window.location.href = 'quadrinhos.html';
        })
        .catch(erro => console.error("Erro ao enviar quadrinho:", erro));
    });
}

const containerQuadrinhos = document.querySelector('.todosQuadrinhos');

if (containerQuadrinhos) {
    fetch('/api/quadrinhos')
        .then((resposta) => resposta.json())
        .then((dados) => {
            containerQuadrinhos.innerHTML = '';
            dados.forEach(hq => {
                containerQuadrinhos.innerHTML += `
                <div class="card-quadrinho">
                    <div class="texto">
                        <h3>${hq.titulo}</h3>
                        <p><strong>Ano de Publicação:</strong> ${hq.ano_publicacao}</p>
                    </div>
                </div>
                `;
            });
        })
        .catch((erro) => console.error("Erro ao buscar os quadrinhos:", erro));
}