-- Database: BookMySeat

-- DROP DATABASE IF EXISTS "BookMySeat";

CREATE DATABASE "BookMySeat"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_India.1252'
    LC_CTYPE = 'English_India.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
-- 	DROP TABLE STANDARDSEATS
	
	CREATE TABLE STANDARDSEATS(
		Id INTEGER PRIMARY KEY,
		A_ROW VARCHAR(50) UNIQUE,
		A_SEAT VARCHAR(50) NOT NULL,
		B_ROW VARCHAR(50) UNIQUE,
		B_SEAT VARCHAR(50) NOT NULL,
		C_ROW VARCHAR(50) UNIQUE,
		C_SEAT VARCHAR(50) NOT NULL,
		D_ROW VARCHAR(50) UNIQUE,
		D_SEAT VARCHAR(50) NOT NULL
	)
	
	SELECT * FROM STANDARDSEATS ORDER BY ID
	
	INSERT INTO STANDARDSEATS(Id, A_ROW, A_SEAT,B_ROW, B_SEAT,C_ROW, C_SEAT,D_ROW, D_SEAT)
	VALUES(5, 'A5','notBooked','B5','notBooked','C5','notBooked','D5','Booked'),
		(6, 'A6','notBooked','B6','Booked','C6','notBooked','D6','notBooked'),
		(7, 'A7','notBooked','B7','notBooked','C7','notBooked','D7','notBooked'),
		(8, 'A8','notBooked','B8','notBooked','C8','Booked','D8','notBooked');
		
-- 	UPDATE STANDARDSEATS SET A_SEAT = 'Booked'
-- 	WHERE A_ROW = 'A1'
	
-- 	Drop table premiumseats

	CREATE TABLE PREMIUMSEATS(
		Id INTEGER PRIMARY KEY,
		E_ROW VARCHAR(50) UNIQUE,
		E_SEAT VARCHAR(50) NOT NULL,
		F_ROW VARCHAR(50) UNIQUE,
		F_SEAT VARCHAR(50) NOT NULL
	)
	
	SELECT * FROM PREMIUMSEATS
	
	INSERT INTO PREMIUMSEATS(Id, E_ROW, E_SEAT,F_ROW, F_SEAT)
	VALUES(5, 'E5','Booked','F5','notBooked'),
		(6, 'E6','notBooked','F6','Booked'),
		(7, 'E7','Booked','F7','notBooked'),
		(8, 'E8','notBooked','F8','Booked');