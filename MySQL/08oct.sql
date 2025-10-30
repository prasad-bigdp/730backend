-- Write a Query to print all the employees name and salary whose salary is
-- greater than average salary
/*use office;
select ename,salary
from employees
where salary > (select avg(salary)
                from employees);*/
-- Write a Query to find sum of
--  salaries of employees who are india or US
/* 
select sum(salary)
from employees
where eid IN (select eid
from employees
where country = "india" || country = "us");*/  
-- write a query to print cname who bought
-- "mouse" in orders table
use shop;
/*select cname from customers
where cid IN (select cust_id
from orders
where item = "mouse")*/
-- 3. write a query to print the employee names
use office;
-- write a query to print the employee names whose salary is greater than
 -- the average salary of their own department
select ename,salary, dept_id, t3.dname
from employees as t1
inner JOIN
departments as t3 ON t1.dept_id = t3.did
where salary > 
(select avg(salary)
from employees as t2
where t1.dept_id = t2.dept_id)









             
                
                
                