/* JOINS */
/* Consulta la información de dos tablas que no se relacionan*/
SELECT * FROM actor, film_text;

/* Consulta de información de dos tablas que se relacionan */
SELECT * FROM actor, film_actor;

/* Comienzo de las consultas con dos tablas */
SELECT city_id, city, country FROM city
INNER JOIN country ON country_id = country_id;

/*Acomodo de la información en orden acendente*/
SELECT city_id, city, country FROM city
INNER JOIN country ON city.country_id = country.country_id ORDER by city_id ASC;

/* Resolución del ejercicio */
SELECT film.film_id, first_name, last_name, title FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id 
INNER JOIN actor ON film_actor.actor_id = actor.actor_id ;

/* Ordenamiento por el id de la pelicula */
SELECT film.film_id, first_name, last_name, title FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id 
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
ORDER by film_id ASC;


/* Obtener las peliculas solo de un actor de mayor a menor*/
SELECT film.film_id, first_name, last_name, title FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id 
INNER JOIN actor ON film_actor.actor_id = actor.actor_id WHERE actor.actor_id = 1
ORDER by film_id ASC;

SELECT film.film_id, actor.first_name, actor.last_name, title 
FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON actor.actor_id = film_actor.actor_id 
ORDER BY actor.first_name ASC;
