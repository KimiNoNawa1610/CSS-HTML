create database websql;

use websql;

create table users(

	email varchar(255) primary key,
    
    created_at datetime default now()
    
);