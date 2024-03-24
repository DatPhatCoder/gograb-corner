# Instructions and User story

## Restful api features

Features to implement
- user registration
  - user forgot password (low priority)
- user login
- user logout
- Payments (need details...)
- inventory management (add, remove, update, display)
- transactional records (display)

Account types
- Admin account for the people stocking the machine
- User account for the people buying from the machine

## User story
Standard buying flow...

place an order
checks database for stock
order ticket is either created or rejected
    if rejected they are told about the item that is missing
generates a 4 digit code
stores that in the database
communicates the digital code to the associated vending machine
they get there, enter the 4 digit code, checks for the order, dispenses, 
reduces quantities from the database and keeps a record of the transaction

Admin account for the people stocking the machine
So that they can add product quantities through the app to the database

## Setup database
> Do this last. Hard to change once you start coding; so hardcode till API decided
Draft for Tables.... 

create table products (
    id int primary key,
    name varchar(255),
    quantity int,
    price decimal(10, 2)
);

create table orders (
    id int primary key,
    product_id int,
    code varchar(4),
    status varchar(20),
    foreign key (product_id) references products(id)
);

create table transactions (
    id int primary key,
    order_id int,
    timestamp datetime,
    foreign key (order_id) references orders(id)
);

    
