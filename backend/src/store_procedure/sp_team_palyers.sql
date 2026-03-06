CREATE TABLE tbl_players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_id INT,

    player_name VARCHAR(150),
    player_image VARCHAR(255),
	player_role VARCHAR(100),
	player_bio TEXT,
    player_country VARCHAR(100),
    
    player_twitter VARCHAR(255),
    player_instagram VARCHAR(255),
    player_twitch VARCHAR(255),

    status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT,

    FOREIGN KEY (team_id) REFERENCES tbl_gaming_teams(id) ON DELETE CASCADE
);

select * from tbl_players;

-- create players
DELIMITER $$

CREATE PROCEDURE sp_create_player(
    IN p_team_id INT,
    IN p_player_name VARCHAR(150),
    IN p_player_image VARCHAR(255),
    IN p_player_role VARCHAR(100),
    IN p_player_bio TEXT,
    IN p_player_country VARCHAR(100),
    IN p_player_twitter VARCHAR(255),
    IN p_player_instagram VARCHAR(255),
    IN p_player_twitch VARCHAR(255),
    IN p_createdBy INT
)
BEGIN
    INSERT INTO tbl_players(
        team_id,
        player_name,
        player_image,
        player_role,
        player_bio,
        player_country,
        player_twitter,
        player_instagram,
        player_twitch,
        createdBy, updatedBy
    )
    VALUES(
        p_team_id,
        p_player_name,
        p_player_image,
        p_player_role,
        p_player_bio,
        p_player_country,
        p_player_twitter,
        p_player_instagram,
        p_player_twitch,
        p_createdBy, p_createdBy
    );
END$$

DELIMITER ;

-- get all palyers
DELIMITER $$

CREATE PROCEDURE sp_get_all_players()
BEGIN
    SELECT 
        p.*,
        t.team_name,
        t.team_logo
    FROM tbl_players p
    LEFT JOIN tbl_gaming_teams t ON p.team_id = t.id
    
    ORDER BY p.createdAt DESC;
END$$

DELIMITER ;

-- get player by id or single order
DELIMITER $$

CREATE PROCEDURE sp_get_palyer_by_id (
	IN p_id INT
)
BEGIN 
	SELECT 
		p.*,
        t.team_name,
        t.team_logo
        
	FROM tbl_players p 
    LEFT JOIN tbl_gaming_teams t ON p.team_id = t.id
    
    WHERE p.id = p_id 
    AND p.status = 1
    ORDER BY p.createdAt;
END $$

DELIMITER ;

-- update player
DELIMITER $$

CREATE PROCEDURE sp_update_player(
    IN p_id INT,
    IN p_team_id INT,
    IN p_player_name VARCHAR(150),
    IN p_player_image VARCHAR(255),
    IN p_player_role VARCHAR(100),
    IN p_player_bio TEXT,
    IN p_player_country VARCHAR(100),
    IN p_player_twitter VARCHAR(255),
    IN p_player_instagram VARCHAR(255),
    IN p_player_twitch VARCHAR(255),
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_players
    SET
        team_id = COALESCE(p_team_id, team_id),
		player_name = COALESCE(p_player_name, player_name),
		player_image = COALESCE(p_player_image, player_image),
		player_role = COALESCE(p_player_role, player_role),
		player_bio = COALESCE(p_player_bio, player_bio),
		player_country = COALESCE(p_player_country, player_country),
		player_twitter = COALESCE(p_player_twitter, player_twitter),
		player_instagram = COALESCE(p_player_instagram, player_instagram),
		player_twitch = COALESCE(p_player_twitch, player_twitch),
        updatedBy = p_updatedBy
        
        WHERE id = p_id 
        AND status = 1;
    
	SELECT ROW_COUNT() AS affectedRows;
END$$

DELIMITER ;

select * from tbl_players;

DELIMITER $$

CREATE PROCEDURE sp_delete_player(
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_players
    SET 
		status = 0,
        updatedBy = p_updatedBy
        
    WHERE id = p_id 
    AND status = 1;
    
    SELECT ROW_COUNT() AS affectedRows;
END$$

DELIMITER ;


-- get all player by team
DELIMITER $$

CREATE PROCEDURE sp_get_players_by_team(
    IN p_team_id INT
)
BEGIN
    SELECT *
    FROM tbl_players
    WHERE team_id = p_team_id
    AND status = 1
    ORDER BY createdAt DESC;
END$$

DELIMITER ;
