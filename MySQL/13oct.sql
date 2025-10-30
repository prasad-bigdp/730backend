-- functions
-- create a function which returns the 
-- total salary of a department
use office;
/*delimiter //
create function totalSalary(did int)
returns int reads sql data
begin
    declare total int;
     set total = (select sum(salary) 
     from employees where dept_id = did);
    return total;
end //
delimiter ;
*/
-- select totalSalary(202);
-- write a function to add two numbers
/*delimiter //
create function addNumbers(a int,b int)
returns int deterministic
begin
    declare c int;
    set c = a+b;
    return c;
end //
delimiter ;
*/
-- select addNumbers(10,5)
/*
select concat("java","script"),length("my sql"),
       replace("sql","s","p"),
       left("databas",4),trim(" hello ");
select ucase("john")       
select abs(-22),mod(5,3),power(5,3),ceil(2.1),
floor(2.8),round(3.1458968,2),*/
-- select round(RAND()*10 + 20)
select now()







       
     


