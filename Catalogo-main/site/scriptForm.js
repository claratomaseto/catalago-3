class Personagem {
    constructor(nome, codinome, tipo, status, localizacao, imagem) {
        this.nome = nome;
        this.codinome = codinome;
        this.tipo = tipo;
        this.status = status;
        this.localizacao = localizacao;
        this.imagem = imagem;
    }
}

const formulario = document.getElementById('meuFormulario');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nomeF = document.getElementById('nome').value;
        const codinomeF = document.getElementById('codinome').value;
        const tipoF = document.getElementById('tipo').value;
        const statusF = document.getElementById('status').value;
        const localizacaoF = document.getElementById('localizacao').value;
        const imagemF = document.getElementById('imagem').value;

        const novoPersonagem = new Personagem(nomeF, codinomeF, tipoF, statusF, localizacaoF, imagemF);

        fetch('/api/lista', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoPersonagem)
        })
        .then(resposta => resposta.json())
        .then(() => {
            alert('Personagem cadastrado com sucesso!');
            formulario.reset(); // Corrigido de .request() para .reset()
            window.location.href = 'index.html';
        })
        .catch(erro => console.error("Erro ao enviar:", erro));
    });
}