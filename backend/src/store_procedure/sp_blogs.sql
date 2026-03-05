CREATE TABLE tbl_blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
	tag_id INT,
    
    blog_title VARCHAR(255) NOT NULL,
	blog_image VARCHAR(500),
    blog_date DATE,
    blog_content TEXT,
    
	status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT,
    
    FOREIGN KEY (category_id) REFERENCES tbl_blog_categories(id),
	FOREIGN KEY (tag_id) REFERENCES tbl_blog_tags(id)
);

select * from tbl_blogs;


-- create blog	
DELIMITER $$

CREATE PROCEDURE sp_create_blog(
    IN p_category_id INT,
    IN p_tag_id INT,
    IN p_blog_title VARCHAR(255),
    IN p_blog_image VARCHAR(500),
    IN p_blog_date DATE,
    IN p_blog_content TEXT,
    IN p_createdBy INT
)
BEGIN
    INSERT INTO tbl_blogs (
        category_id,
        tag_id,
        blog_title,
        blog_image,
        blog_date,
        blog_content,
        createdBy, updatedBy
    )
    VALUES (
        p_category_id,
        p_tag_id,
        p_blog_title,
        p_blog_image,
        p_blog_date,
        p_blog_content,
        p_createdBy, p_createdBy
    );
END $$

DELIMITER ;


-- get all blog
DELIMITER $$

CREATE PROCEDURE sp_get_all_blogs()
BEGIN
    SELECT 
        b.id, b.blog_title, b.blog_image, b.blog_date, b.blog_content, b.status,
        
        c.id AS category_id,
        c.category_name,
        
        t.id AS tag_id,
        t.tag_name,
        
        COUNT(bc.id) AS total_comments
        
    FROM tbl_blogs b
    LEFT JOIN tbl_blog_categories c ON b.category_id = c.id
    LEFT JOIN tbl_blog_tags t ON b.tag_id = t.id
    LEFT JOIN tbl_blog_comments bc ON b.id = bc.blog_id
	
    GROUP BY b.id
    ORDER BY b.createdAt DESC;
END $$

DELIMITER ;


-- get blog by id or single blog
DELIMITER $$

CREATE PROCEDURE sp_get_blog_by_id(
    IN p_id INT
)
BEGIN
    SELECT 
        b.id,b.category_id,b.tag_id, b.blog_title, b.blog_image, b.blog_date,
        b.blog_content, b.status,
        
        c.category_name,
        t.tag_name,
        
        COUNT(bc.id) AS total_comments
    FROM tbl_blogs b
    LEFT JOIN tbl_blog_categories c ON b.category_id = c.id
    LEFT JOIN tbl_blog_tags t ON b.tag_id = t.id
    LEFT JOIN tbl_blog_comments bc ON b.id = bc.blog_id
        
    WHERE b.id = p_id
    AND b.status = 1 
    
    GROUP BY b.id;
    
END $$

DELIMITER ;


-- update Blog
DELIMITER $$

CREATE PROCEDURE sp_update_blog(
    IN p_id INT,
    IN p_category_id INT,
    IN p_tag_id INT,
    IN p_blog_title VARCHAR(255),
    IN p_blog_image VARCHAR(500),
    IN p_blog_date DATE,
    IN p_blog_content TEXT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_blogs
    SET
        category_id = COALESCE(p_category_id, category_id),
        tag_id = COALESCE(p_tag_id, tag_id),
        blog_title = COALESCE(p_blog_title, blog_title),
        blog_image = COALESCE(p_blog_image, blog_image),
        blog_date = COALESCE(p_blog_date, blog_date),
        blog_content = COALESCE(p_blog_content, blog_content),
        updatedBy = p_updatedBy
    WHERE id = p_id
    AND status = 1;
END $$

DELIMITER ;


-- delete blog
DELIMITER $$

CREATE PROCEDURE sp_delete_blog(
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_blogs
    SET
        status = 0,
        updatedBy = p_updatedBy
    WHERE id = p_id;
END $$

DELIMITER ;


-- get blog by category
DELIMITER $$

CREATE PROCEDURE sp_get_blogs_by_category(
    IN p_category_id INT
)
BEGIN
    SELECT 
        b.id, b.blog_title, b.blog_image, b.blog_date, b.blog_content,
        c.category_name,
        t.tag_name
    FROM tbl_blogs b
    LEFT JOIN tbl_blog_categories c ON b.category_id = c.id
    LEFT JOIN tbl_blog_tags t ON b.tag_id = t.id
    
    WHERE b.category_id = p_category_id
    AND b.status = 1
    ORDER BY b.createdAt DESC;
END $$

DELIMITER ;


-- get blog by tag
DELIMITER $$

CREATE PROCEDURE sp_get_blogs_by_tag(
    IN p_tag_id INT
)
BEGIN
    SELECT 
        b.id, b.blog_title, b.blog_image, b.blog_date, b.blog_content,
        c.category_name,
        t.tag_name
        
    FROM tbl_blogs b
    LEFT JOIN tbl_blog_categories c ON b.category_id = c.id
    LEFT JOIN tbl_blog_tags t ON b.tag_id = t.id
    WHERE b.tag_id = p_tag_id
    AND b.status = 1
    ORDER BY b.createdAt DESC;
END $$

DELIMITER ;