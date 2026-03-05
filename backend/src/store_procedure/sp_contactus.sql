CREATE TABLE tbl_contactus (
    id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(255),
    subject VARCHAR(255),
    message TEXT,
    contact_status ENUM('new','read','replied') DEFAULT 'new',
    
	status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT 
);

select * from tbl_contactus;

-- create contactus or add contact us
DELIMITER $$
CREATE PROCEDURE sp_create_contactus (
    IN p_name VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_phone VARCHAR(255),
    IN p_subject VARCHAR(255),
    IN p_message TEXT,
    IN p_createdBy INT
)
BEGIN
    INSERT INTO tbl_contactus 
	( name, email, phone, subject, message, createdBy , updatedBy)
    VALUES
    (   p_name, p_email,p_phone, p_subject, p_message, p_createdBy,p_createdBy);
END$$
DELIMITER ;


-- get all contactus list
DELIMITER $$

CREATE PROCEDURE sp_get_all_contactus ()
BEGIN
    SELECT 
        id,name,email,phone,subject,
        message,status,createdAt
        
    FROM tbl_contactus
    ORDER BY createdAt DESC;
END $$

DELIMITER ;

-- update contact status (new,read,replied) mark as read
DELIMITER $$

CREATE PROCEDURE sp_update_contact_status(
    IN p_id INT,
	IN p_contact_status VARCHAR(20),
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_contactus
    SET contact_status = p_contact_status,
        updatedBy = p_updatedBy
    WHERE id = p_id
      AND status = 1;
END $$
DELIMITER ;



-- delete contactus
DELIMITER $$

CREATE PROCEDURE sp_delete_contactus (
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_contactus
    SET 
        status = 0,
        updatedBy = p_updatedBy
    WHERE id = p_id;
END $$

DELIMITER ;