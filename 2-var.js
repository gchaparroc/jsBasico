/* Variable es un lugar en memoria
Es una representación de algún lugar en la memoria para guardar datos
 */
var nombre = "Gonzalo"; // Nombre apuntará en algún lugar en la memoria (nosotros no sabemos donde, pero eso no es importante), pero dirá la señal de = tomará ese string y lo guardará en ese lugar.  y después si queremos utilizar ese valor, utilizaremos la variable Nombre para pedir que nos traigan ese string de memoria.

// = es igual a operador de asignación 

var edad; // Declarar
edad = 30; // Inicializar 

/* Array*/
var elementos = ['Computadora', 'Celular']; 

//objeto
var persona = {   
    nombre: "Gonzalo",
    edad: 30
}

/* consola es de igual forma una variable que le pertenece al navegador, con cierto espacio en 
memoria, y con un tipo de comportamiento especial. Donde Log es un método de la función*/
console.log(elementos[1]); 
console.log(persona.nombre+' tiene '+persona.edad+' años de edad.')