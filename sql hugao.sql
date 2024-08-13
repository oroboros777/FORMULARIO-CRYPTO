CREATE DATABASE Hugão;
USE Hugão;

CREATE TABLE IF NOT EXISTS Dados_Pessoais(
id int(4) UNIQUE auto_increment,
Nome varchar(30),
CPF varchar(20) NOT NULL,
Idade tinyint,
Endereco varchar(30),
PRIMARY KEY(id)
);

SELECT * FROM Dados_Pessoais;

START TRANSACTION;
INSERT INTO Dados_Pessoais (Nome, CPF, Idade, Endereco)
VALUES ('Beck', '12345678', 15, 'Açaí');
SELECT * FROM Dados_Pessoais;
 -- ROLLBACK;
 COMMIT;
 
 START TRANSACTION;
 UPDATE Dados_Pessoais SET Nome = 'Leo' WHERE Id = 2;
 SELECT * FROM Dados_Pessoais;
 -- ROLLBACK;
 COMMIT; 

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Proz@2023'