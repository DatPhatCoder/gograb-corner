# Instructions and User story


End of june Goals:
1) A user can select an Item, add it to cart, checkout and transaction ID is produced.
2) The transaction ID would then be entered into the vending machine and vending machine would send a HTTP GET request to restful API endpoint defined in  your App's backend
3) The server replies with products and their quantities if valid transaction ID else it replies with a message that invalid order ID
4) If the transaction ID is valid, and the vending machine is successful in dispensing the products, the vending machine will send another HTTP post request to the successful order endpoint on the app. In this case, the inventory listing on the app shall be updated to subtract the items from total items .


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

https://aiven.io/docs/products/postgresql/get-started
https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/

### product

create table products (
    productID int primary key,
    name varchar(255),
    description varchar(255),
    quantity int,
    price decimal(10, 2)
);

INSERT INTO products (productID, name, description, quantity, price)
VALUES 
(1, 'Product A','Description of Product A', 1, 19.99),
(2, 'Product B','Description of Product B', 2, 4.99),
(3, 'Product C','Description of Product C', 3, 1.99);

### machines

create table machines (
    machineID int primary key,
    location varchar(255)
);

### orders

create table orders (
    orderID int primary key,
    machineID int,
    code varchar(4),
    status varchar(20),
    foreign key (machineID) references machines(machineID)
);

INSERT INTO orders (orderID, product_id, code, status)
VALUES (1, 1, 'ABCD', 'Pending');

### transactions

create table transactions (
    id int primary key,
    order_id int,
    timestamp datetime,
    foreign key (order_id) references orders(id)
);

    
## Open questions

1. How to handle payments?
2. What are the details of the location features? Does it even concern the backend? -- Im not sure about that...
3. Do I even need the userController? guess we'll discuss the architecture in-depth later