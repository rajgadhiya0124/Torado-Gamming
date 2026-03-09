CREATE TABLE tbl_matches (
    id INT AUTO_INCREMENT PRIMARY KEY,

    tournament_id INT NULL,
    team1_id INT,
    team2_id INT,
    match_date DATE,
    match_time TIME,
    team1_score INT DEFAULT 0,
    team2_score INT DEFAULT 0,
    winner_team_id INT,
    match_info TEXT,
    
    youtube_stream VARCHAR(255),
    twitch_stream VARCHAR(255),
    match_status ENUM('upcoming','live','completed') DEFAULT 'upcoming',
    
	status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT,
    
    FOREIGN KEY (team1_id) REFERENCES tbl_gaming_teams(id),
    FOREIGN KEY (team2_id) REFERENCES tbl_gaming_teams(id),
    FOREIGN KEY (winner_team_id) REFERENCES tbl_gaming_teams(id)
);

select * from tbl_matches;

-- create a new match 
DELIMITER $$

CREATE PROCEDURE sp_create_match(
    IN p_tournament_id INT,
    IN p_team1_id INT,
    IN p_team2_id INT,
    IN p_match_date DATE,
    IN p_match_time TIME,
    IN p_match_info TEXT,
    IN p_youtube_stream VARCHAR(255),
    IN p_twitch_stream VARCHAR(255),
    IN p_createdBy INT
)
BEGIN
    INSERT INTO tbl_matches(
        tournament_id,
        team1_id,
        team2_id,
        match_date,
        match_time,
        match_info,
        youtube_stream,
        twitch_stream,
        createdBy, updatedBy
    )
    VALUES(
        p_tournament_id,
        p_team1_id,
        p_team2_id,
        p_match_date,
        p_match_time,
        p_match_info,
        p_youtube_stream,
        p_twitch_stream,
        p_createdBy , p_createdBy
    );
END$$

DELIMITER ;

-- //get match by match status(upcoming ,complete)
DELIMITER $$

CREATE PROCEDURE sp_get_match_byStatus(
    IN p_match_status VARCHAR(20)
)
BEGIN

	SELECT 
		m.id, m.tournament_id, m.match_date, m.match_time,
		m.team1_score, m.team2_score, m.youtube_stream, m.twitch_stream, m.createdAt, m.match_status,

		t1.team_name AS team1_name,
		t1.team_logo AS team1_logo,
		t1.country AS team1_country,

		t2.team_name AS team2_name,
		t2.team_logo AS team2_logo,
		t2.country AS team2_country

	FROM tbl_matches m
	LEFT JOIN tbl_gaming_teams t1 ON t1.id = m.team1_id
	LEFT JOIN tbl_gaming_teams t2 ON t2.id = m.team2_id

	WHERE 
		(p_match_status = 'all' OR m.match_status = p_match_status)

	ORDER BY m.match_date DESC;

END $$
DELIMITER ;




-- get match by id or match details
DELIMITER $$

CREATE PROCEDURE sp_get_match_by_id(
    IN p_id INT
)
BEGIN
    SELECT 	m.*,
    
			t1.team_name AS  team1_name,
            t1.team_logo AS team1_logo,
            t1.country AS team1_country,
            
			t2.team_name AS team2_name,
			t2.team_logo AS team2_logo,
			t2.country AS team2_country
    
    FROM tbl_matches m
    
    LEFT JOIN tbl_gaming_teams t1 ON t1.id = m.team1_id
    LEFT JOIN tbl_gaming_teams t2 ON t2.id = m.team2_id
    
    WHERE m.id = p_id 
    AND m.status = 1;
END$$

DELIMITER ;


-- update match
DELIMITER $$

CREATE PROCEDURE sp_update_match_info(
    IN p_match_id INT,
    IN p_tournament_id INT,
    IN p_team1_id INT,
    IN p_team2_id INT,
    IN p_match_date DATE,
    IN p_match_time TIME,
    IN p_match_info TEXT,
    IN p_youtube_stream VARCHAR(255),
    IN p_twitch_stream VARCHAR(255),
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_matches
    SET
		tournament_id = p_tournament_id,
		team1_id = COALESCE(p_team1_id, team1_id),
		team2_id = COALESCE(p_team2_id, team2_id),
		match_date = COALESCE(p_match_date, match_date),
		match_time = COALESCE(p_match_time, match_time),
		match_info = COALESCE(p_match_info, match_info),
		youtube_stream = COALESCE(p_youtube_stream, youtube_stream),
		twitch_stream = COALESCE(p_twitch_stream, twitch_stream),
        updatedBy = p_updatedBy
    WHERE id = p_match_id;
    
    SELECT ROW_COUNT() AS affectedRows;
END$$

DELIMITER ;


-- update match score and match status
DELIMITER $$

CREATE PROCEDURE sp_update_match_score(
    IN p_match_id INT,
    IN p_team1_score INT,
    IN p_team2_score INT,
    IN p_winner_team_id INT,
    IN p_match_status ENUM('upcoming','live','completed'),
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_matches
    SET
        team1_score = COALESCE(p_team1_score, team1_score),
        team2_score = COALESCE(p_team2_score, team2_score),
        winner_team_id = COALESCE(p_winner_team_id, winner_team_id),
        match_status = COALESCE(p_match_status, match_status),
        updatedBy = p_updatedBy
    WHERE id = p_match_id;
    
    SELECT ROW_COUNT() AS affectedRows;
END$$

DELIMITER ;


-- delete match
DELIMITER $$

CREATE PROCEDURE sp_delete_match(
    IN p_match_id INT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_matches
    SET
        status = 0,
        updatedBy = p_updatedBy
    WHERE id = p_match_id 
	AND status = 1;
    
    SELECT ROW_COUNT() AS affectedRows;
END$$

DELIMITER ;