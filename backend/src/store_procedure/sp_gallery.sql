CREATE TABLE tbl_gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gallery_image VARCHAR(255),
    
    status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT
);

select * from tbl_gallery;

-- create gallery
DELIMITER $$

CREATE PROCEDURE sp_create_gallery(
    IN p_gallery_image VARCHAR(255),
    IN p_createdBy INT
)
BEGIN
	INSERT INTO tbl_gallery ( gallery_image, createdBy , updatedBy)
	VALUES( p_gallery_image, p_createdBy, p_createdBy);

END$$

DELIMITER ;

-- get all gallery
DELIMITER $$

CREATE PROCEDURE sp_get_all_gallery()
BEGIN

SELECT 
		id,
		gallery_image,
		status,
		createdAt
	FROM tbl_gallery
	ORDER BY createdAt DESC;
END$$

DELIMITER ;


-- delete gallery
DELIMITER $$

CREATE PROCEDURE sp_delete_gallery(
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN
	UPDATE tbl_gallery
		SET status= 0,
		updatedBy = p_updatedBy
        
		WHERE id = p_id AND status= 1;
        
        SELECT ROW_COUNT() AS affectedRows;
END $$

DELIMITER ;