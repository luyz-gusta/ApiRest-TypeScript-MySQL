use nodejs_ts_mysql;

create table tbl_user(
	id int not null auto_increment primary key,
    nome varchar(255) not null,
    email varchar(255) not null,
    
    unique index(email),
    unique index(id)
);

create table tbl_post(
	id int not null auto_increment primary key,
    title varchar(100) not null,
	content varchar(255) not null,
	id_user int not null,
    
    constraint FK_Post_User
    foreign key (id_user)
    references tbl_user(id),
    
    unique index(id)
);

show tables;
update tbl_user set nome = '', email = '' where id = 3;

select * from tbl_user;