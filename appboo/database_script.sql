CREATE DATABASE mydatabase;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  verification_code VARCHAR(255),
  verified BOOLEAN DEFAULT FALSE
);

UPDATE users SET verification_code = 'الرمز_هنا' WHERE email = 'البريد_الإلكتروني_هنا';

SELECT * FROM users WHERE email = 'البريد_الإلكتروني_هنا' AND verification_code = 'الرمز_هنا';

INSERT INTO users (email, password) VALUES ('البريد_الإلكتروني_هنا', 'الكلمة_المرور_هنا');

SELECT * FROM users WHERE email = 'البريد_الإلكتروني_هنا' AND password = 'الكلمة_المرور_هنا';




-- إضافة بيانات
INSERT INTO users (username, email, password) VALUES
  ('user1', 'user1@example.com', 'hashed_password1'),
  ('user2', 'user2@example.com', 'hashed_password2'),
  ('user3', 'aa5447457@gmail.com', 'aa5447457');