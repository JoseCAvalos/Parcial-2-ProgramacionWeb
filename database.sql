CREATE DATABASE RegistroProductos;
GO

USE RegistroProductos;
GO

CREATE TABLE Productos (
    id INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);