use office;
/*create view indians as
select ename,salary,gender
from employees
where country = "india"*/
/*select gender,count(gender) 
from indians
group by gender;*/
/*update indians
set salary = 30000
where ename = "peter"*/
/*create view employyeDeps as
select e.eid,e.ename,d.dname
from employees as e
inner JOIN
departments d
ON e.dept_id = d.did
delimiter //
create procedure countryWise(IN c varchar(20))
begin
    select * from employees
    where country = c;
end //
delimiter ;
*/
-- call countryWise("canada");

-- create  a stored procedure which tells number of employeed based on department
/*delimiter //
create procedure empDepCount
(IN dn varchar(20),OUT emp_count INT)
begin
   select count(*) into emp_count from employees
    where dept_id = 
    (select did from departments where dname= dn);
end //
delimiter ;*/
call empDepCount("hr",@total);
select @total as total_employees;











