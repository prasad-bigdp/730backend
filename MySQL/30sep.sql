--  find the highest salary paid employee in employees table
use shop;
/*select gender,max(salary)
from employees
group by gender*/
-- Display number of people based on 
-- gender along with their names in employees table
/*select gender, count(eid), group_concat(ename)
from employees
group by gender;*/
-- Write a Query to retrieve customer_name, customer_id and along 
-- with the total amount spent by each customer
select c.cid,c.cname,sum(o.amount),group_concat(o.item)
from customers as c
inner join
orders as o
ON c.cid = o.cust_id
group by o.cust_id










