SELECT * FROM actor WHERE actor_id = 135;
/* Uso de operadores logicos */
/*
OPERADORES DE COMPARACION:
Igual           =
Distinto        !=
Menor           <
Mayor           >
Menor o igual   <=
Mayor o igual   >=
Entre           between A and B
En              in
Es nulo         is null
No nulo         is not null
Como            like
No es como      not like
*/
/* Seleccionar por id mayor a un numero */
SELECT * FROM actor WHERE actor_id > 63;
SELECT * FROM actor WHERE actor_id >= 63;

/* Seleccionar campos */
SELECT actor_id, first_name, last_name FROM actor WHERE actor_id > 63;

/*Selecionar elementos con id pares  */
SELECT*FROM actor WHERE actor_id%2=0;

/*
OPERADORES LOGICOS:
O       OR
Y       AND
NO      NOT
*/

/* Operador AND */
SELECT* FROM actor WHERE first_name = "CHRIS" AND actor_id > 50;

/*
COMODINES:
Cualquier cantidad de caracteres: %
Un caracter desconocido: _
Busqueda por cualquier información
*/

/* Nombres que terminan con a*/
SELECT * FROM actor WHERE first_name LIKE "%a";

/* Nombres que inicia con a*/
SELECT * FROM actor WHERE first_name LIKE "a%";

/* Nombre que contengan u */
SELECT * FROM actor WHERE first_name LIKE "%u%";

/*Busca los que tengan u y last_name que empiecen en e*/
SELECT * FROM actor WHERE first_name LIKE "%u%" OR last_name LIKE "e%";

/* Busca first_name que contengan an o empiecen con e */
SELECT * FROM actor WHERE first_name LIKE "%an%" OR last_name LIKE "e%";


/* Desde la tabla film */
SELECT * FROM film WHERE rental_duration = 3;

/* Cuenta todos los elementos que tengan un rental_duration=3 */
SELECT COUNT(film_id) FROM film WHERE rental_duration = 3;

/* Retorno del numero de peliculas con rental_duration y con un identificador */
SELECT rental_duration, COUNT(film_id) AS "Total:" FROM film WHERE rental_duration = 3;

/*GROUP agrupar elementos de la cantidad de elementos que existen*/
SELECT rental_duration, COUNT(film_id) AS "Total" FROM film GROUP BY rental_duration;

/* Odenamiento en orden mayor a menor */
SELECT rental_duration, COUNT(film_id) AS "Total" FROM film GROUP BY rental_duration ORDER BY rental_duration DESC;
SELECT rental_duration, COUNT(film_id) AS "Total" FROM film GROUP BY rental_duration ORDER BY Total DESC;


/* Odenamiento en orden menor a mayor */
SELECT rental_duration, COUNT(film_id) AS "Total" FROM film GROUP BY rental_duration ORDER BY rental_duration ASC;

/* Promedio del replacement_cost*/
SELECT AVG(replacement_cost) AS "Costo Promedio" FROM film;