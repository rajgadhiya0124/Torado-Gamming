CREATE TABLE tbl_core_team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_name VARCHAR(150),
    member_role VARCHAR(100),
    member_image VARCHAR(255),
    member_bio TEXT,
    
    member_twitter VARCHAR(255),
    member_instagram VARCHAR(255),
    member_linkedin VARCHAR(255),
    
    status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT
);

select * from tbl_core_team;

-- create core team
DELIMITER $$

CREATE PROCEDURE sp_create_coreteam (
	IN p_member_name VARCHAR(150),
    IN p_member_role VARCHAR(100),
    IN p_member_image VARCHAR(255),
    IN p_member_bio TEXT,
	IN p_member_twitter VARCHAR(255),
    IN p_member_instagram VARCHAR(255),
    IN p_member_linkedin VARCHAR(255),
    IN p_createdBy INT
)
BEGIN 
	INSERT INTO tbl_core_team  
		(member_name , member_role, member_image, member_bio,member_twitter,member_instagram,member_linkedin, createdBy , updatedBy)
    VALUES 
		(p_member_name, p_member_role, p_member_image, p_member_bio, p_member_twitter, p_member_instagram,p_member_linkedin , p_createdBy, p_createdBy);
END $$

DELIMITER ;


-- get all team members
DELIMITER $$

CREATE PROCEDURE sp_get_all_coreteam()
BEGIN
    SELECT 
        id,
        member_name,
        member_role,
        member_image,
        member_bio,
        member_twitter,
        member_instagram,
        member_linkedin,
        status,
        createdAt
        
    FROM tbl_core_team ;
END$$

DELIMITER ;


-- get team member by id or single team 
DELIMITER $$

CREATE PROCEDURE sp_get_coreteam_by_id(
    IN p_id INT
)
BEGIN
    SELECT 
        id,
        member_name,
        member_role,
        member_image,
        member_bio,
        member_twitter,
        member_instagram,
        member_linkedin,
        createdAt
        
    FROM tbl_core_team
    WHERE id = p_id 
    AND status = 1;
END$$

DELIMITER ;

-- update core team members
DELIMITER $$

CREATE PROCEDURE sp_update_coreteam(
    IN p_id INT,
    IN p_member_name VARCHAR(150),
    IN p_member_role VARCHAR(100),
    IN p_member_image VARCHAR(255),
    IN p_member_bio TEXT,
    IN p_member_twitter VARCHAR(255),
    IN p_member_instagram VARCHAR(255),
    IN p_member_linkedin VARCHAR(255),
    IN p_updatedBy INT
)
BEGIN

	UPDATE tbl_core_team
	SET
		member_name = COALESCE(p_member_name, member_name),
		member_role = COALESCE(p_member_role, member_role),
		member_image = COALESCE(p_member_image, member_image),
		member_bio = COALESCE(p_member_bio, member_bio),
        member_twitter = COALESCE(p_member_twitter,member_twitter),
        member_instagram = COALESCE(p_member_instagram, member_instagram),
        member_linkedin = COALESCE(p_member_linkedin, member_linkedin),
		updatedBy = p_updatedBy
		
	WHERE id = p_id 
    AND status = 1;
	
    SELECT ROW_COUNT() AS affectedRows;
END$$

DELIMITER ;


-- delete core team members
DELIMITER $$

CREATE PROCEDURE sp_delete_coreteam(
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN

UPDATE tbl_core_team
	SET
		status = 0,
		updatedBy = p_updatedBy
        
	WHERE id = p_id 
    AND status = 1;

    SELECT ROW_COUNT() AS affectedRows;
END$$

DELIMITER ;


