CREATE TABLE tbl_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user','admin') DEFAULT 'user',

    status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT 
);

select * from tbl_users;

-- register user
DELIMITER $$

CREATE PROCEDURE sp_register_user(
    IN p_first_name VARCHAR(100),
    IN p_last_name VARCHAR(100),
    IN p_username VARCHAR(100),
    IN p_email VARCHAR(150),
    IN p_password VARCHAR(255),
    IN p_createdBy INT
)
BEGIN
    INSERT INTO tbl_users
    (first_name, last_name, username, email, password, createdBy, updatedBy)
    VALUES
    (p_first_name, p_last_name, p_username, p_email, p_password, p_createdBy, p_createdBy);
END $$

DELIMITER ;

-- find user by id for check existing user
DELIMITER $$

CREATE PROCEDURE sp_find_exists_email(
	p_email VARCHAR(150)
)
BEGIN
	SELECT * FROM  tbl_users 
    WHERE email = p_email AND status = 1;
END $$

DELIMITER ;


-- login user using email or username
DELIMITER $$

CREATE PROCEDURE sp_login_user(
    IN p_login VARCHAR(150)
)
BEGIN
    SELECT * FROM tbl_users
    WHERE (email = p_login OR username = p_login)
    AND status = 1
    LIMIT 1;
END $$

DELIMITER ;

-- delete user 
DELIMITER $$

CREATE PROCEDURE sp_delete_user(
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_users
    SET status = 0,
        updatedBy = p_updatedBy
    WHERE id = p_id;
END $$

DELIMITER ;

