use office;
/*create index nameIndex 
ON employees(ename,salary);
create index salaryIndex 
on employees(salary);
select * from employees 
where salary > 20000;*/
/*drop index nameIndex on employees
*/
delimiter //
create table log_table(
log_id int primary key auto_increment,
message varchar(100),
createdAt 
timestamp default current_timestamp);
create trigger basicTigger
after insert on employees
for each row
begin
   insert into 
   log_table (message)
   values
   (CONCAT(NEW.ename,'new employee is added'));
end//







