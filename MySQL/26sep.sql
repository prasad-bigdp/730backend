/* select is used for displaying
a specific columns or data */
-- select 10%5;
-- 1.  Display all rows and columns from employees table
use office;
-- select * from employees;
-- set SQL_SAFE_UPDATES = false
/*select ename,salary
from employees
where salary>20000;*/
-- Display employees ename, gender and salary who country is not india
/*select ename,gender,salary
 from employees where country<>"india"*/
 -- 6. Display employees ename and salary whose salary is between 15000 and 30000
  /* select ename,salary
   from employees 
   where salary between 15000 and 30000;*/
-- 7. Display employees ename and salary whose country is in the list of "us" or "uk" 
  /* select ename,salary,country
   from employees
   where country NOT IN ("US","UK"); */
-- 8. Display employees ename, salary whose salary is null
 /*SELECT ename,salary
   from employees
   where salary IS NOT NULL;  
 -- 9.  DISPLAY employees ename and salary whose name starts with 'p'
  select ename, salary
  from employees
  where ename LIKE 'p%'  
-- 10.DISPLAY employees ename and salary whose name ends with 'a'
select ename, salary
  from employees
  where ename LIKE '%a'*/
  -- 11.DISPLAY employees ename and salary whose name second letter should be 'e'
select ename, salary
  from employees
  where ename LIKE '_e%'
  
   
   
   
   
 
 
 
 
