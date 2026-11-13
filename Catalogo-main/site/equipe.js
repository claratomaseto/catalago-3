class Equipe {
    constructor(nome_equipe, base_operacoes, ano_criacao) {
        this.nome_equipe = nome_equipe;
        this.base_operacoes = base_operacoes;
        this.ano_criacao = ano_criacao;
    }
}

const formularioEquipe = document.getElementById('formEquipe');

if (formularioEquipe) {
    formularioEquipe.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome_equipe = document.getElementById('nomeEquipe').value;
        const base_operacoes = document.getElementById('baseOperacoes').value;
        const ano_criacao = document.getElementById('anoCriacao').value;

        const novaEquipe = new Equipe(nome_equipe, base_operacoes, ano_criacao);

        fetch('/api/equipes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novaEquipe)
        })
        .then(resposta => resposta.json())
        .then(() => {
            alert('Equipe cadastrada com sucesso!');
            formularioEquipe.reset();
            window.location.href = 'equipes.html';
        })
        .catch(erro => console.error("Erro ao enviar equipe:", erro));
    });
}

const containerEquipes = document.querySelector('.todasEquipes');

if (containerEquipes) {
    fetch('/api/equipes')
        .then((resposta) => resposta.json())
        .then((dados) => {
            containerEquipes.innerHTML = '';
            dados.forEach(eq => {
                containerEquipes.innerHTML += `
                <div class="card-equipe">
                    <div class="texto">
                        <h3>${eq.nome_equipe}</h3>
                        <p><strong>Base de Operações:</strong> ${eq.base_operacoes}</p>
                        <p><strong>Ano de Criação:</strong> ${eq.ano_criacao}</p>
                    </div>
                </div>
                `;
            });
        })
        .catch((erro) => console.error("Erro ao buscar as equipes:", erro));
}