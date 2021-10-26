/* Renombrar tabla */
ALTER TABLE usuarios RENAME TO users;

/* Cambiar el nombre de una columna */
ALTER TABLE users CHANGE direccion dir VARCHAR(50);

/* Agregar columnas */
ALTER TABLE usuarios ADD edad INT NOT NULL;

/*Borrar columna */
ALTER TABLE usuarios DROP edad;