-- create database moviesDB;
-- drop database moviesdb;
-- show databases;
-- use moviesdb;
/*create database schoolDB;
use schoolDB;
create table students(sid INT,
sname varchar(30), marks INT, 
gender char(1), 
percentage DECIMAL(5,2),
dob date);*/

-- drop database schooldb;
-- create database schooldb;
use schooldb;
/*create table students(sid int, 
sname varchar(20), gender char(1), 
marks decimal(5,2), dob date);*/
-- drop table students;

/*create table students
(sid int primary key auto_increment,
sname varchar(20) not null,
age int check(age>=18),
gender char(1), email varchar(30) unique,
country varchar(10) default "india");*/

create table courses(cid int primary key, 
cname varchar(20) not null,
fName varchar(20) not null,
student_id int,
foreign key(student_id) references
students(sid) );

















