CREATE DATABASE candidate_db ; 

USE candidate_db ;

CREATE TABLE candidates(
id INT AUTO_INCREMENT PRIMARY KEY , 
name VARCHAR(100) NOT NULL , 
email VARCHAR(100) UNIQUE NOT NULL ,
phone_number VARCHAR(15),
current_status  VARCHAR(50) DEFAULT 'Applied' ,
resume_link VARCHAR(255)
);
