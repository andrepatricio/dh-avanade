CREATE TABLE cidades (
	id int auto_increment primary key,
	uf char(2) not null,
	cidade varchar(100) not null
);

CREATE TABLE times (
    id int auto_increment primary key,
    nome VARCHAR(100),
    idade smallint,
    cidade_id int,
    FOREIGN KEY (cidade_id) references cidades(id)
);

CREATE TABLE campeonatos (
	id int auto_increment primary key, 
	nome VARCHAR(100)
);

CREATE TABLE campeoes (
	id int auto_increment primary key,
	campeonato_id int,
	time_id int,
	FOREIGN KEY (campeonato_id) references campeonatos(id),
	FOREIGN KEY (time_id) references times(id)
);

alter table campeoes 
add ano char(4) not null
