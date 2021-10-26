USE blog;
CREATE TABLE usuarios(
    id       INT NOT NULL AUTO_INCREMENT,
    nombre   VARCHAR(100) NOT NULL,
    correo   VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    direccion VARCHAR(255),
    CONSTRAINT pk_usuario PRIMARY KEY (id)
);