class Habilidade {
    constructor(nome_poder, descricao) {
        this.nome_poder = nome_poder;
        this.descricao = descricao;
    }
}

const formularioHabilidade = document.getElementById('formHabilidade');

if (formularioHabilidade) {
    formularioHabilidade.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome_poder = document.getElementById('nomeHabilidade').value;
        const descricao = document.getElementById('descricaoHabilidade').value;

        const novaHabilidade = new Habilidade(nome_poder, descricao);

        fetch('/api/habilidades', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novaHabilidade)
        })
        .then(resposta => resposta.json())
        .then(() => {
            alert('Habilidade cadastrada com sucesso!');
            formularioHabilidade.reset();
            window.location.href = 'habilidades.html';
        })
        .catch(erro => console.error("Erro ao enviar habilidade:", erro));
    });
}

const containerHabilidades = document.querySelector('.todasHabilidades');

if (containerHabilidades) {
    fetch('/api/habilidades')
        .then((resposta) => resposta.json())
        .then((dados) => {
            containerHabilidades.innerHTML = '';
            dados.forEach(hab => {
                containerHabilidades.innerHTML += `
                <div class="card-habilidade">
                    <div class="texto">
                        <h3>${hab.nome_poder}</h3>
                        <p>${hab.descricao}</p>
                    </div>
                </div>
                `;
            });
        })
        .catch((erro) => console.error("Erro ao buscar as habilidades:", erro));
}