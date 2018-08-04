DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;
-- 
CREATE TABLE burger (
 id INTEGER NOT NULL AUTO_INCREMENT,
 burger_name VARCHAR (1000),
 devoured boolean,
 PRIMARY KEY (id)
 );