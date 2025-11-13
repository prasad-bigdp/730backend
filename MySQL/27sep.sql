use office;
-- 12. Write a query to retrieve employees ename and salary and country who are from either UK or Canada
/*select ename, salary, country
from employees
where country = "UK" or country ="Canada";*/
-- 13. Write a query to retrieve employees ename, gender , salary whose salary 
-- is greater than 20000 and gender is male
-- select ename, gender, salary from employees 
-- where salary > 20000 && gender = 'M';
-- 14. Print / display employees details according to their salaries in increasing order
/*select eid,ename,salary
from employees
order by salary desc,ename;
-- 16. Display Top 3 highest paid employees names and salary
select eid,ename,salary
from employees
order by salary desc
LIMIT 1;
-- Display highest paid employee details
select eid,ename,salary
from employees
order by salary desc
LIMIT 1;
--  18. Display employee name,id and salary  whose salary is second lowest
select eid,ename,salary
from employees
order by salary
limit 2,1;*/








