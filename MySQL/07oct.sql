-- Write a query to print customer 
-- name along with item they bought
use shop;
/*select t1.cname,group_concat(t2.item) as items
from Customers as t1
inner join
orders as t2
ON t1.cid = t2.cust_id
group by t1.cid
*/
-- write a query to print customer names along 
-- with number of items they bought
/*select a.cname, count(p.item)
from orders as p
right join
customers as a
ON a.cid = p.cust_id
group by a.cid 
*/
-- write a query to print customers country
-- along with number of items ordered.
/*select t1.country, count(t2.item), sum(t2.amount)
from customers as t1
left join 
orders as t2
ON t1.cid = t2.cust_id
group by t1.country*/



/*
select t1.country, count(t2.item), sum(t2.amount)
from customers as t1
left join 
orders as t2
ON t1.cid = t2.cust_id
group by t1.country
union
select t1.country, count(t2.item), sum(t2.amount)
from customers as t1
right join 
orders as t2
ON t1.cid = t2.cust_id
group by t1.country*/

-- write a query to print employee name 
-- with their manager name
use office;
select t1.ename,t2.ename
from employees as t1
left join employees as t2
ON t1.mid = t2.eid










