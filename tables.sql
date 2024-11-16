CREATE DATABASE finance;
USE finance;
CREATE TABLE доходы (
  id INT PRIMARY KEY,
  дата DATE,
  сумма DECIMAL(10, 2),
  источник VARCHAR(255)
);
CREATE TABLE расходы (
  id INT PRIMARY KEY,
  дата DATE,
  сумма DECIMAL(10, 2),
  категория VARCHAR(255)
);
CREATE TABLE сбережения (
  id INT PRIMARY KEY,
  дата DATE,
  сумма DECIMAL(10, 2),
  тип VARCHAR(255)
);
CREATE TABLE инвестиции (
  id INT PRIMARY KEY,
  дата DATE,
  сумма DECIMAL(10, 2),
  тип VARCHAR(255)
);
