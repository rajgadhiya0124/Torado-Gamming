CREATE TABLE tbl_partners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partner_name VARCHAR(255),
    partner_logo VARCHAR(500),
    partner_link VARCHAR(500),
    
    status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT
);

select * from tbl_partners;

-- create new partner
DELIMITER $$

CREATE PROCEDURE sp_create_partner(
    IN p_partner_name VARCHAR(255),
    IN p_partner_logo VARCHAR(500),
    IN p_partner_link VARCHAR(500),
    IN p_createdBy INT
)
BEGIN
    INSERT INTO tbl_partners( partner_name, partner_logo, partner_link, createdBy, updatedBy)
    VALUES( p_partner_name, p_partner_logo, p_partner_link, p_createdBy , p_createdBy);
END $$

DELIMITER ;

-- get all partners
DELIMITER $$

CREATE PROCEDURE sp_get_all_partners()
BEGIN
    SELECT id,partner_name,partner_logo,partner_link, status, createdAt
    FROM tbl_partners 
    ORDER BY createdAt DESC;
END $$

DELIMITER ;

-- update partner
DELIMITER $$

CREATE PROCEDURE sp_update_partner(
	IN p_id INT,
    IN p_partner_name VARCHAR(255),
    IN p_partner_logo VARCHAR(500),
    IN p_partner_link VARCHAR(500),
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_partners
    SET 
		partner_name = COALESCE(p_partner_name, partner_name),
        partner_logo = COALESCE(p_partner_logo, partner_logo),
        partner_link = COALESCE(p_partner_link, partner_link),
        updatedBy = p_updatedBy
	WHERE id = p_id 
    AND status = 1;
    
    SELECT ROW_COUNT() AS affectedRows;
END $$

DELIMITER ;


-- delete partner
DELIMITER $$

CREATE PROCEDURE sp_delete_partner(
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_partners 
    SET 
		status = 0,
		updatedBy = p_updatedBy
    WHERE id = p_id 
    AND status = 1;
    
   SELECT ROW_COUNT() AS affectedRows;
END $$

DELIMITER ;