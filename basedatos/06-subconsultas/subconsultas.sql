/*Consultas sobre otras consultas*/

/*Uso de between para un rango de elementos*/
SELECT * FROM film WHERE film_id BETWEEN 1 AND 10;

/* Trae varias varios id de la información */
SELECT * FROM film WHERE film_id IN (1,2,3);

/* Obtiene la información de las dos tablas */
SELECT * FROM film WHERE film_id IN (SELECT film_id FROM film_category WHERE category_id = 5);