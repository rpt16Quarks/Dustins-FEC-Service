DROP DATABASE IF EXISTS fec;

CREATE DATABASE fec;

USE fec;

CREATE TABLE Item_Specifics (
  id int NOT NULL AUTO_INCREMENT,
  category varchar(20),
  cat_val varchar(50),
  PRIMARY KEY (id)
  );

CREATE TABLE Item_Description (
  id int NOT NULL AUTO_INCREMENT,
  userName varchar(20),
  photo json,
  PRIMARY KEY (id)
  );

CREATE TABLE Products (
  id int NOT NULL AUTO_INCREMENT, item_Number int NOT NULL,
  Item_Spec_Id int NOT NULL,
  Seller varchar(20),
  Item_Description_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (Item_Spec_Id), REFERENCES Item_Description (id),
  FOREIGN KEY (Item_Description_Id) REFERENCES Item_Specifics(id)
  );

