insert into cidades(uf, cidade) 
values 
('SC', "Florianopolis"),
('RS', "Porto Alegre"), 
('RJ', "Rio de Janeiro"),
('SP', "São Paulo"),
('SP', "Campinas"),
('MG', "Belo Horizonte");

insert into times(nome, idade, cidade_id) 
values
('Figueirense', 99, 1),
('Gremio', 105, 2),
('Internacional', 98, 2),
('Cruzeiro', 90, 2),
('Flamengo', 110, 3),
('Vasco', 107, 3),
('Fluminense', 100, 3),
('São Paulo', 102, 4),
('Palmeiras', 92, 4),
('Ponte Preta', 91, 5),
('Guarani', 96, 5),
('Cruzeiro', 98, 6),
('America', 80, 6);

INSERT into campeonatos(nome) 
values
("Catarinense"),
("Gaucho"),
("Carioca"),
("Paulista"),
("Mineiro"),
("Brasileiro"),
("Copa do Brasil"),
("Libertadores"),
("Mundial");

insert into campeoes (campeonato_id, time_id, ano)
values
(1,1,2010),
(1,1,2011),
(1,1,2012),
(2,2,2020),
(2,2,2019),
(2,2,2018),
(7,2,2016),
(8,2,2017),
(8,2,1995),
(8,2,1984),
(9,2,1984),
(2,3,2010),
(2,3,2011),
(7,3,2006),
(8,3,2006),
(3,5,2019),
(6,5,2019),
(8,5,2019),
(8,5,1981),
(8,8,2005),
(8,8,1991),
(8,8,1992),
(9,8,1991);
