Table data all select

select * from DealerActivity 

Table data all delete

Truncate table DealerActivity


create database customer

use customer 


create table customer (
   Id int Primary Key identity(1,1)
   FirstName Varchar(50),
   LastName varchar(50),
   Age int

)

insert into Customer 
(Firstname,LastName,[Age])
values ('joey', 'Blue', 40)


select * from customer where FirstName = 'joey'
and LastName like 'Blue%'

update customer set Age = 35 where FirstName = 'Joys' and LastName = 'blue';

DELETE Customer;

alter table customer add City varchar(50)

drop table customer

alter table orders add foreign key  (CustomerId) reference customer(Id)

select * from orders inner join product on orders.productID=products.id

select sum(products.price) as Total, AVG(products.price) as AVGTotal from orders inner join product on orders.productID=products.id group by product.name