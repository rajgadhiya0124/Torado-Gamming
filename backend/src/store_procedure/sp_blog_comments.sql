CREATE TABLE tbl_blog_comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    blog_id INT NOT NULL,

    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    website_link VARCHAR(255) NULL,
    comment TEXT ,

    status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT,

    FOREIGN KEY (blog_id) REFERENCES tbl_blogs(id) ON DELETE CASCADE
);

select * from tbl_blog_comments;


-- create blog comments
DELIMITER $$

CREATE PROCEDURE sp_create_blog_comment(
    IN p_blog_id INT,
    IN p_name VARCHAR(100),
    IN p_email VARCHAR(150),
    IN p_website_link VARCHAR(255),
    IN p_comment TEXT,
    IN p_createdBy INT
)
BEGIN
    INSERT INTO tbl_blog_comments
    (
        blog_id, name, email, website_link, comment, createdBy, updatedBy
    )
    VALUES
    (
        p_blog_id, p_name, p_email, p_website_link, p_comment, p_createdBy, p_createdBy
    );
END$$

DELIMITER ;


-- get all comments
DELIMITER $$

CREATE PROCEDURE sp_get_all_blog_comments()
BEGIN
    SELECT 
        c.id,
        c.blog_id,
        b.blog_title,
        c.name,
        c.email,
        c.website_link,
        c.comment,
        c.status,
        c.createdAt
    FROM tbl_blog_comments c
    LEFT JOIN tbl_blogs b ON c.blog_id = b.id
    ORDER BY c.createdAt DESC;
END$$

DELIMITER ;


-- get cooments for each blog 
DELIMITER $$

CREATE PROCEDURE sp_get_comments_by_blog(
    IN p_blog_id INT
)
BEGIN
    SELECT 
        id,
        name,
        website_link,
        comment,
        createdAt
    FROM tbl_blog_comments
    WHERE blog_id = p_blog_id
    AND status = 1
    ORDER BY createdAt DESC;
    
END$$

DELIMITER ;


-- delete blog comments
DELIMITER $$

CREATE PROCEDURE sp_delete_blog_comment(
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_blog_comments
    SET status = 0,
		updatedBy = p_updatedBy
        
    WHERE id = p_id AND status = 1;
    
	SELECT ROW_COUNT() AS affectedRows;
END$$

DELIMITER ;