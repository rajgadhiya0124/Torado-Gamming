CREATE TABLE tbl_faqs (
    id INT AUTO_INCREMENT PRIMARY KEY,

    question VARCHAR(500) NOT NULL,
    answer TEXT NOT NULL,
    
    status TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdBy INT,
    updatedBy INT
);

select * from tbl_faqs;

-- create faq
DELIMITER $$
CREATE PROCEDURE sp_create_faq (
	IN p_question VARCHAR(500),
    IN p_answer TEXT,
    IN p_createdBy INT
)
BEGIN 
	INSERT INTO tbl_faqs (question, answer, createdBy, updatedBy)
    VALUES (p_question, p_answer, p_createdBy, p_createdBy);
END $$
DELIMITER ;
    

-- get all faq
DELIMITER $$

CREATE PROCEDURE sp_get_all_faqs ()
BEGIN
    SELECT id,question, answer,status, createdAt
    FROM tbl_faqs
    ORDER BY createdAt DESC;
END $$

DELIMITER ;


-- update faq
DELIMITER $$

CREATE PROCEDURE sp_update_faq(
    IN p_id INT,
    IN p_question VARCHAR(500),
    IN p_answer TEXT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_faqs
    SET question = COALESCE(p_question, question),
        answer = COALESCE(p_answer, answer),
        updatedBy = p_updatedBy
    WHERE id = p_id;
    
    SELECT ROW_COUNT() AS affectedRows;
END $$

DELIMITER ;


-- delete faq
DELIMITER $$

CREATE PROCEDURE sp_delete_faq(
    IN p_id INT,
    IN p_updatedBy INT
)
BEGIN
    UPDATE tbl_faqs
    SET status = 0,
        updatedBy = p_updatedBy
    WHERE id = p_id AND status= 1;
    
    SELECT ROW_COUNT() AS affectedRows;
END $$

DELIMITER ;