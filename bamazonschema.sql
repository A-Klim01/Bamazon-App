DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(40) NULL,
  department VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  stock INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item, department, price, quantity, stock)
VALUES ("hairline bulb's", "automobile", 49.99, 2, 25);

INSERT INTO products (item, department, price, quantity, stock)
VALUES ("erasure module's", "class accessories", 0.35, 1, 300);

INSERT INTO products (item, department, price, quantity, stock)
VALUES ("trading tooph pix", "hobbies", 5.49, 1, 20);

INSERT INTO products (item, department, price, quantity, stock)
VALUES ("lunard", "class accessories", 1.99, 1, 100);

INSERT INTO products (item, department, price, quantity, stock)
VALUES ("pencal", "lass accessories", .49, 5, 500);

INSERT INTO products (item, department, price, quantity, stock)
VALUES ("muggits", "Kitchen supplies", 7.99, 1, 50);

INSERT INTO products (item, department, price, quantity, stock)
VALUES ("hip ties", "Mens", 3.89, 1, 60);

INSERT INTO products (item, department, price, quantity, stock)
VALUES ("bobblepeople", "hobbies", 10.99, 1, 75);

INSERT INTO products (item, department, price, quantity, stock)
VALUES ("window blinders", "automobile", 9.99, 1, 50);

INSERT INTO products (item, department, price, quantity, stock)
VALUES ("colognay", "Mens" , 64.99, 1, 15);

SELECT * FROM bamazon_DB;