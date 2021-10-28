/* Inner Join */
SELECT * FROM departamentos
JOIN empleados ON departamentos.Id = empleados.DepartamentoId;

SELECT * FROM departamentos d
JOIN empleados e ON d.Id = e.DepartamentoId;

SELECT Id, e.Nombre, d.Nombre AS "Nombre de Departamento" FROM departamentos d
JOIN empleados e ON  d.Id = e.DepartamentoId;


/* LEFT JOIN */
SELECT Id, e.Nombre, d.Nombre AS "Nombre de Departamento" FROM departamentos d
LEFT JOIN empleados e ON  d.Id = e.DepartamentoId;

/* RIGHT JOIN */
SELECT Id, e.Nombre, d.Nombre AS "Nombre de Departamento" FROM departamentos d
RIGHT JOIN empleados e ON  d.Id = e.DepartamentoId;

/* Full join */
SELECT Id, e.Nombre, d.Nombre AS "Nombre de Departamento" FROM departamentos d
FULL OUTER JOIN empleados e ON  d.Id = e.DepartamentoId;



