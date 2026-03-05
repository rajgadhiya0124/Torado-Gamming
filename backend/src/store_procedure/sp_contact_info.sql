CREATE TABLE tbl_contact_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contactinfo_type ENUM('email','phone','address') NOT NULL,
	contactinfo_title VARCHAR(100) NOT NULL,
    contactinfo_value VARCHAR(100) NOT NULL,
    
	status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT 
);

select * from tbl_contact_info;

-- create contact inffo
DELIMITER $$

CREATE PROCEDURE sp_create_contact_info (
    IN p_contactinfo_type ENUM('email','phone','address'),
    IN p_contactinfo_title VARCHAR(100),
    IN p_contactinfo_value VARCHAR(100),
    IN p_createdBy INT
)
BEGIN
    INSERT INTO tbl_contact_info
    (
        contactinfo_type, contactinfo_title, contactinfo_value, createdBy, updatedBy
    )
    VALUES
    (
        p_contactinfo_type, p_contactinfo_title, p_contactinfo_value, p_createdBy, p_createdBy
    );

END $$

DELIMITER ;

-- get all contact info
DELIMITER $$

CREATE PROCEDURE sp_get_all_contact_info ()
BEGIN
    SELECT * 
    FROM tbl_contact_info
    ORDER BY id ASC;
END $$

DELIMITER ;


-- update contact info
DELIMITER $$
CREATE PROCEDURE sp_update_contact_info (
    IN p_id INT,
    IN p_contactinfo_type ENUM('email','phone','address'),
    IN p_contactinfo_title VARCHAR(100),
    IN p_contactinfo_value VARCHAR(100),
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_contact_info
    SET
        contactinfo_type = p_contactinfo_type,
        contactinfo_title = p_contactinfo_title,
        contactinfo_value = p_contactinfo_value,
        updatedBy = p_updatedBy
    WHERE id = p_id;

END $$
DELIMITER ;

-- delete contact info
DELIMITER $$

CREATE PROCEDURE sp_delete_contact_info (
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_contact_info
    SET 
        status = 0,
        updatedBy = p_updatedBy
    WHERE id = p_id;

END $$

DELIMITER ;