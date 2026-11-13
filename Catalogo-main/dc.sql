CREATE DATABASE dc;
USE dc;

CREATE TABLE IF NOT EXISTS Localizacao (
    id_localizacao INT PRIMARY KEY,
    nome_local VARCHAR(100),
    universo VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Equipe (
    id_equipe INT PRIMARY KEY,
    nome_equipe VARCHAR(100),
    base_operacoes VARCHAR(100),
    ano_criacao INT
);

CREATE TABLE IF NOT EXISTS Quadrinho (
    id_quadrinho INT PRIMARY KEY,
    titulo VARCHAR(150),
    ano_publicacao INT
);

CREATE TABLE IF NOT EXISTS Poder_Habilidade (
    id_poder INT PRIMARY KEY,
    nome_poder VARCHAR(100),
    descricao TEXT
);

CREATE TABLE IF NOT EXISTS Personagem (
    id_personagem INT PRIMARY KEY,
    nome_real VARCHAR(100),
    codinome VARCHAR(100),
    tipo VARCHAR(50),
    status VARCHAR(50),
    id_localizacao INT,
    FOREIGN KEY (id_localizacao) REFERENCES Localizacao(id_localizacao)
);

CREATE TABLE IF NOT EXISTS Personagem_Equipe (
    id_personagem INT,
    id_equipe INT,
    PRIMARY KEY (id_personagem, id_equipe),
    FOREIGN KEY (id_personagem) REFERENCES Personagem(id_personagem),
    FOREIGN KEY (id_equipe) REFERENCES Equipe(id_equipe)
);

CREATE TABLE IF NOT EXISTS Personagem_Quadrinho (
    id_personagem INT,
    id_quadrinho INT,
    PRIMARY KEY (id_personagem, id_quadrinho),
    FOREIGN KEY (id_personagem) REFERENCES Personagem(id_personagem),
    FOREIGN KEY (id_quadrinho) REFERENCES Quadrinho(id_quadrinho)
);

CREATE TABLE IF NOT EXISTS Personagem_Poder (
    id_personagem INT,
    id_poder INT,
    PRIMARY KEY (id_personagem, id_poder),
    FOREIGN KEY (id_personagem) REFERENCES Personagem(id_personagem),
    FOREIGN KEY (id_poder) REFERENCES Poder_Habilidade(id_poder)
);


-- ==========================================
-- INSERÇÃO DE DADOS (INSERTS)
-- ==========================================

INSERT INTO Localizacao (id_localizacao, nome_local, universo) VALUES
(1, 'Gotham City', 'DC Universe Main Earth'),
(2, 'Metrópolis', 'DC Universe Main Earth'),
(3, 'Themyscira', 'DC Universe Main Earth'),
(4, 'Atlântida', 'DC Universe Main Earth'),
(5, 'Central City', 'DC Universe Main Earth'),
(6, 'Coast City', 'DC Universe Main Earth'),
(7, 'Planeta Oa', 'DC Universe Main Earth'),
(8, 'Kahndaq', 'DC Universe Main Earth'),
(9, 'Blüdhaven', 'DC Universe Main Earth'),
(10, 'Planeta Krypton', 'DC Universe Main Earth'),
(11, 'Apokolips', 'DC Universe Main Earth'),
(12, 'Star City', 'DC Universe Main Earth'),
(13, 'Belle Reve', 'DC Universe Main Earth'),
(14, 'Nanda Parbat', 'DC Universe Main Earth'),
(15, 'Gorilla City', 'DC Universe Main Earth');

INSERT INTO Equipe (id_equipe, nome_equipe, base_operacoes, ano_criacao) VALUES
(1, 'Liga da Justiça', 'Torre de Vigia', 1960),
(2, 'Outsiders (Renegados)', 'Bunker do Batman / Móvel', 1983),
(3, 'Jovens Titãs', 'Torre dos Titãs', 1964),
(4, 'Sociedade da Justiça da América', 'Nova York', 1940),
(5, 'Esquadrão Suicida', 'Penitenciária Belle Reve', 1959),
(6, 'Bat-Família', 'Caverna do Morcego (Batcaverna)', 1939),
(7, 'Tropa dos Lanternas Verdes', 'Oa', 1959),
(8, 'Aves de Rapina', 'Torre do Relógio de Gotham', 1996),
(9, 'Justiça Jovem', 'Justiça Cave', 1998),
(10, 'Patrulha do Destino', 'Mansão Caulder', 1963),
(11, 'Liga da Justiça Sombria', 'Bar Oblivion / Casa dos Mistérios', 2011),
(12, 'Legião dos Super-Heróis', 'Terra do Século XXXI', 1958),
(13, 'Sexteto Secreto', 'A Casa da Revelação', 1968),
(14, 'Tropa dos Lanternas Vermelhos', 'Ysmault', 2007),
(15, 'Capuz Vermelho e os Renegados', 'Base Móvel', 2011);

INSERT INTO Quadrinho (id_quadrinho, titulo, ano_publicacao) VALUES
(1, 'Batman: Under the Red Hood', 2005),
(2, 'Action Comics #1', 1938),
(3, 'Detective Comics #27', 1939),
(4, 'Flashpoint', 2011),
(5, 'Crisis on Infinite Earths', 1985),
(6, 'Batman: A Death in the Family', 1988),
(7, 'Kingdom Come', 1996),
(8, 'The Dark Knight Returns', 1986),
(9, 'Green Lantern: Rebirth', 2004),
(10, 'All-Star Superman', 2005),
(11, 'Watchmen', 1986),
(12, 'Teen Titans: The Judas Contract', 1984),
(13, 'Batman: Year One', 1987),
(14, 'Blackest Night', 2009),
(15, 'Infinite Crisis', 2005);

INSERT INTO Poder_Habilidade (id_poder, nome_poder, descricao) VALUES
(1, 'Mestre em Artes Marciais', 'Domínio avançado de múltiplos estilos de combate corpo a corpo.'),
(2, 'Superforça', 'Capacidade física sobre-humana de erguer e mover peso extremo.'),
(3, 'Voo', 'Capacidade de flutuar e se mover pelo ar sem meios mecânicos.'),
(4, 'Supervelocidade', 'Mover-se e reagir a velocidades extremamente elevadas.'),
(5, 'Perícia com Armas de Fogo', 'Precisão cirúrgica e maestria no uso de armamento bélico.'),
(6, 'Intelecto Nível Genial', 'Capacidade dedutiva, tática e científica fora do comum.'),
(7, 'Anel de Poder Construto', 'Capacidade de moldar energia da luz de acordo com a vontade.'),
(8, 'Regeneração Celular', 'Cura acelerada de ferimentos e traumas corporais.'),
(9, 'Inviolabilidade / Invulnerabilidade', 'Resistência a danos físicos, projéteis e temperaturas extremas.'),
(10, 'Telepatia', 'Leitura e manipulação mental de outros indivíduos.'),
(11, 'Magia / Feitiçaria', 'Manipulação de forças místicas e arcanas.'),
(12, 'Habilidade Tática e Furtividade', 'Especialista em invasão, infiltração e rastreamento nas sombras.'),
(13, 'Visão de Raio-X e Térmica', 'Capacidade de enxergar através de objetos e emitir calor pelos olhos.'),
(14, 'Magia de Sangue / Fúria', 'Canalização do ódio e fúria em ataques destrutivos.'),
(15, 'Comunicação Aquática', 'Capacidade de se comunicar e comandar vida marinha.');

INSERT INTO Personagem (id_personagem, nome_real, codinome, tipo, status, id_localizacao) VALUES
(1, 'Jason Todd', 'Capuz Vermelho', 'Anti-herói', 'Ativo', 1),
(2, 'Bruce Wayne', 'Batman', 'Herói', 'Ativo', 1),
(3, 'Clark Kent', 'Superman', 'Herói', 'Ativo', 2),
(4, 'Diana Prince', 'Mulher-Maravilha', 'Herói', 'Ativo', 3),
(5, 'Barry Allen', 'Flash', 'Herói', 'Ativo', 5),
(6, 'Hal Jordan', 'Lanterna Verde', 'Herói', 'Ativo', 6),
(7, 'Arthur Curry', 'Aquaman', 'Herói', 'Ativo', 4),
(8, 'Dick Grayson', 'Asa Noturna', 'Herói', 'Ativo', 9),
(9, 'Harleen Quinzel', 'Arlequina', 'Anti-herói', 'Ativo', 1),
(10, 'Slade Wilson', 'Exterminador', 'Vilão', 'Ativo', 1),
(11, 'Lex Luthor', 'Lex Luthor', 'Vilão', 'Ativo', 2),
(12, 'Koriand\'r', 'Estelar', 'Herói', 'Ativo', 1),
(13, 'Roy Harper', 'Arsenal', 'Anti-herói', 'Ativo', 12),
(14, 'Zatanna Zatara', 'Zatanna', 'Herói', 'Ativo', 1),
(15, 'Bizarro', 'Bizarro', 'Anti-herói', 'Ativo', 2);

INSERT INTO Personagem_Equipe (id_personagem, id_equipe) VALUES
(1, 6),  -- Capuz Vermelho na Bat-Família
(1, 15), -- Capuz Vermelho nos Renegados (Outlaws)
(1, 2),  -- Capuz Vermelho nos Outsiders
(2, 1),  -- Batman na Liga da Justiça
(2, 6),  -- Batman na Bat-Família
(3, 1),  -- Superman na Liga da Justiça
(4, 1),  -- Mulher-Maravilha na Liga da Justiça
(5, 1),  -- Flash na Liga da Justiça
(6, 1),  -- Lanterna Verde na Liga da Justiça
(6, 7),  -- Lanterna Verde na Tropa dos Lanternas Verdes
(7, 1),  -- Aquaman na Liga da Justiça
(8, 3),  -- Asa Noturna nos Jovens Titãs
(8, 6),  -- Asa Noturna na Bat-Família
(9, 5),  -- Arlequina no Esquadrão Suicida
(13, 15);-- Arsenal em Capuz Vermelho e os Renegados

INSERT INTO Personagem_Quadrinho (id_personagem, id_quadrinho) VALUES
(1, 1),  -- Capuz Vermelho em Under the Red Hood
(1, 6),  -- Capuz Vermelho em A Death in the Family
(2, 1),  -- Batman em Under the Red Hood
(2, 3),  -- Batman em Detective Comics #27
(2, 8),  -- Batman em The Dark Knight Returns
(2, 13), -- Batman em Batman: Year One
(3, 2),  -- Superman em Action Comics #1
(3, 10), -- Superman em All-Star Superman
(4, 5),  -- Mulher-Maravilha em Crisis on Infinite Earths
(5, 4),  -- Flash em Flashpoint
(6, 9),  -- Lanterna Verde em Green Lantern: Rebirth
(6, 14), -- Lanterna Verde em Blackest Night
(8, 12), -- Asa Noturna em The Judas Contract
(10, 12),-- Exterminador em The Judas Contract
(15, 15);-- Bizarro em Infinite Crisis

INSERT INTO Personagem_Poder (id_personagem, id_poder) VALUES
(1, 1),  -- Capuz Vermelho: Mestre em Artes Marciais
(1, 5),  -- Capuz Vermelho: Perícia com Armas de Fogo
(1, 12), -- Capuz Vermelho: Habilidade Tática e Furtividade
(2, 1),  -- Batman: Mestre em Artes Marciais
(2, 6),  -- Batman: Intelecto Nível Genial
(2, 12), -- Batman: Habilidade Tática e Furtividade
(3, 2),  -- Superman: Superforça
(3, 3),  -- Superman: Voo
(3, 9),  -- Superman: Invulnerabilidade
(3, 13), -- Superman: Visão de Raio-X e Térmica
(4, 2),  -- Mulher-Maravilha: Superforça
(4, 3),  -- Mulher-Maravilha: Voo
(5, 4),  -- Flash: Supervelocidade
(6, 7),  -- Lanterna Verde: Anel de Poder Construto
(7, 2),  -- Aquaman: Superforça
(7, 15), -- Aquaman: Comunicação Aquática
(8, 1),  -- Asa Noturna: Mestre em Artes Marciais
(8, 12), -- Asa Noturna: Habilidade Tática e Furtividade
(9, 1),  -- Arlequina: Mestre em Artes Marciais
(10, 1), -- Exterminador: Mestre em Artes Marciais
(10, 6), -- Exterminador: Intelecto Nível Genial
(11, 6), -- Lex Luthor: Intelecto Nível Genial
(12, 2), -- Estelar: Superforça
(12, 3), -- Estelar: Voo
(13, 5), -- Arsenal: Perícia com Armas de Fogo
(14, 11),-- Zatanna: Magia / Feitiçaria
(15, 2), -- Bizarro: Superforça
(15, 9); -- Bizarro: Invulnerabilidade