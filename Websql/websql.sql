create database websql;

use websql;

create table users(

	email varchar(255) primary key,
    
    created_at datetime default now()
    
);

insert into users(email) values ("talon.gmail.com"),("Bee.gmail.com");