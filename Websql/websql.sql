create database websql;

use websql;

drop table users;

create table users(

	email varchar(255) primary key,
    
    created_at datetime default now()
    
);

select count(*) from users;

select created_at as earlies_date from users where created_at=(select min(created_at) from users);

select email, created_at from users where created_at=(select min(created_at) from users);

select monthname(created_at) as months, count(email) from users group by months order by months;

select count(email) as yahoo_users from users where email like '%@yahoo%';

select case 
when email like'%@yahoo%' then 'yahoo_users '
when email like '%@gmail%' then 'gmail_users '
when email like'%@hotmail%' then ' hotmail_users'
else 'other' end as email_providers, count(email) as total_users from users group by email_providers;


