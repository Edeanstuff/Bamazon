DROP DATABASE IF EXISTS bamazon;
-- Creates the "animals_db" database --
CREATE DATABASE bamazon;

CREATE TABLE products (
  id INTEGER(100) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  price INTEGER(30),
  stock_quantity INTEGER(30),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Apple", 100, 10);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Controller", 30, 10);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Chair", 45, 10);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Hat", 15, 10);
INSERT INTO products (product_name, price, stock_quantity)
VALUES ("Shoes", 135, 10);
