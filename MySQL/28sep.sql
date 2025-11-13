-- 1. using group by , print how many males or females are 
-- existed in employees table
use office;
/*select gender, count(eid) as no_of_people
from employees
group by gender;*/
--  2. using group by , print how many people are
-- from each country in employees table
/*select country , count(eid) as no_of_people
from employees
group by country
-- 3. using group by, print how many males 
-- and female in employees table whose 
select gender, count(eid) as no_of_people
from employees
where salary > 20000
group by gender

-- 4. print the employees countries whose
-- no_of_people count is greater than 1
select country, count(eid) as no_of_people
from employees
group by country 
having no_of_people>1
order by no_of_people desc
/*
-- 5. 5. print Indians from employees, gender wise 
-- count only of the count is greater than 2
select gender, count(eid) as no_of_people
from employees
where country = "india"
group by gender
having no_of_people>2*/

-- find total how many employees are in office
/*select count(*) as total_employees
from employees;*/
-- Find the total salary given to employees
/*select sum(salary)
from employees;*/
-- find the total salaries based on genders
select gender,count(salary), sum(salary), avg(salary)
from employees
group by gender














