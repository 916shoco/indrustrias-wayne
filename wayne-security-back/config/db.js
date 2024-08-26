CREATE TABLE users  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('funcionario', 'gerente', 'adm') DEFAULT 'funcionario',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);