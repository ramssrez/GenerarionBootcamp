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