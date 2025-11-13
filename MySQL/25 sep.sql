-- 25 sep
-- drop database schooldb;
/*
create database office;
use office;
create table employees
(eid int primary key auto_increment,
ename varchar(20) not null,
gender char(1),
salary decimal(10,2),
country varchar(10) default "india");*/

-- insert single row
insert into employees values
(101,"shekhar","M",28000.00,"UK");
-- insert single row with specific columns
insert into employees (ename,gender)
values ("john","M");
-- insert multi rows
insert into employees (ename, gender,salary,country)
values ("puja","F",25000.00,"canada"),
 ("Jessica","F",36000.00,"UK"),
  ("Peter","M",20000.00,"india")
-- change salary of "john" to 10000.00
    /*   UPDATE employees
       SET salary = 10000.00,country="US"
       WHERE ename="john";*/
       
-- delete details of people whose country is "US"
-- delete from employees 
     
       
       
       
       
       







