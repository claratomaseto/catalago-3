class Localizacao {
    constructor(nome_local, universo) {
        this.nome_local = nome_local;
        this.universo = universo;
    }
}

const formularioLocalizacao = document.getElementById('formLocalizacao');

if (formularioLocalizacao) {
    formularioLocalizacao.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome_local = document.getElementById('nomeLocal').value;
        const universo = document.getElementById('universo').value;

        const novaLocalizacao = new Localizacao(nome_local, universo);

        fetch('/api/localizacoes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novaLocalizacao)
        })
        .then(resposta => resposta.json())
        .then(() => {
            alert('Localização cadastrada com sucesso!');
            formularioLocalizacao.reset();
            window.location.href = 'localizacoes.html';
        })
        .catch(erro => console.error("Erro ao enviar localização:", erro));
    });
}

const containerLocalizacoes = document.querySelector('.todasLocalizacoes');

if (containerLocalizacoes) {
    fetch('/api/localizacoes')
        .then((resposta) => resposta.json())
        .then((dados) => {
            containerLocalizacoes.innerHTML = '';
            dados.forEach(loc => {
                containerLocalizacoes.innerHTML += `
                <div class="card-localizacao">
                    <div class="texto">
                        <h3>${loc.nome_local}</h3>
                        <p><strong>Universo:</strong> ${loc.universo}</p>
                    </div>
                </div>
                `;
            });
        })
        .catch((erro) => console.error("Erro ao buscar as localizações:", erro));
}