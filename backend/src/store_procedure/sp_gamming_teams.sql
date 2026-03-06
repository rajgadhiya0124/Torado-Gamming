CREATE TABLE tbl_gaming_teams (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    team_name VARCHAR(150) NOT NULL,
    team_logo VARCHAR(255),
    team_tag VARCHAR(20),
    country VARCHAR(100),
    description TEXT,

    twitter_link VARCHAR(255),
    twitch_link VARCHAR(255),
    youtube_link VARCHAR(255),

	status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT
);

select * from tbl_gaming_teams;

-- create a new gaming teams 
DELIMITER $$

CREATE PROCEDURE sp_create_gaming_team(
    IN p_team_name VARCHAR(150),
    IN p_team_logo VARCHAR(255),
    IN p_team_tag VARCHAR(20),
    IN p_country VARCHAR(100),
    IN p_description TEXT,
    IN p_twitter_link VARCHAR(255),
    IN p_twitch_link VARCHAR(255),
    IN p_youtube_link VARCHAR(255),
    IN p_createdBy INT
)
BEGIN
    INSERT INTO tbl_gaming_teams(
        team_name,
        team_logo,
        team_tag,
        country,
        description,
        twitter_link,
        twitch_link,
        youtube_link,
        createdBy, updatedBy
    )
    VALUES(
        p_team_name,
        p_team_logo,
        p_team_tag,
        p_country,
        p_description,
        p_twitter_link,
        p_twitch_link,
        p_youtube_link,
        p_createdBy, p_createdBy
    );
END$$

DELIMITER ;

-- get all gamming teams
DELIMITER $$

CREATE PROCEDURE sp_get_all_gaming_teams()
BEGIN
    SELECT *
    FROM tbl_gaming_teams
    
    ORDER BY createdAt DESC;
END$$

DELIMITER ;


-- get game team by id or team details
DELIMITER $$

CREATE PROCEDURE sp_get_gaming_team_by_id(
    IN p_id INT
)
BEGIN
    SELECT *
    FROM tbl_gaming_teams
    WHERE id = p_id 
    AND status = 1;
END$$

DELIMITER ;


-- update gamming teams
DELIMITER $$

CREATE PROCEDURE sp_update_gaming_team(
    IN p_id INT,
    IN p_team_name VARCHAR(150),
    IN p_team_logo VARCHAR(255),
    IN p_team_tag VARCHAR(20),
    IN p_country VARCHAR(100),
    IN p_description TEXT,
    IN p_twitter_link VARCHAR(255),
    IN p_twitch_link VARCHAR(255),
    IN p_youtube_link VARCHAR(255),
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_gaming_teams
    SET
        team_name = COALESCE(p_team_name, team_name),
		team_logo = COALESCE(p_team_logo, team_logo),
		team_tag = COALESCE(p_team_tag, team_tag),
		country = COALESCE(p_country, country),
		description = COALESCE(p_description, description),
		twitter_link = COALESCE(p_twitter_link, twitter_link),
		twitch_link = COALESCE(p_twitch_link, twitch_link),
		youtube_link = COALESCE(p_youtube_link, youtube_link),
        updatedBy = p_updatedBy
        
    WHERE id = p_id AND status = 1;
    
    SELECT ROW_COUNT() AS affectedRows;
END$$

DELIMITER ;

select * from tbl_gaming_teams;

-- delete teams
DELIMITER $$

CREATE PROCEDURE sp_delete_gaming_team(
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_gaming_teams
    SET 
		status = 0,
        updatedBy = p_updatedBy
    WHERE id = p_id 
    AND status= 1;
    
    SELECT ROW_COUNT() AS affectedRows;
END$$

DELIMITER ;