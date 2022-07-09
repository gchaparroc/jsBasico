/*  
- Ejemplo del universo, un sistema solar, y un planeta.   
- Scope es igual a, donde buscar por cosas (estás cosas son las variables), el Scope es el alcance 
  que tienen las variables, depende de donde las declaremos y las mandamos llamar si tendremos 
  acceso a ellas o no.
- Tenemos dos tipos de Scope, Scope Global y Scope Local.
*/

/*
***************************************************************************************************
Ejemplo de lo que es un Scope Global
*/
var miNombre = "Gonzalo"; 

function nombre() {
    miNombre = "Enrique";
    console.log(miNombre);    
    return miNombre;
}

nombre();

console.log(miNombre);

/* 
*****************************************************************************************************
Ejemplo de lo que es un Scope Local, el Scope local pasa al momento de crear una funcion, esto genera
un ámbito diferente al global, al cual no se podrá tener acceso desde el ámbito global
*/ 

var miNombre = "Gonzalo"

function nombre() {
    var miApellido = "Chaparro"; 
    console.log("Mi nombre  desde scope local: "+miNombre);
    return miNombre + " " + miApellido 
}

nombre();

console.log("Mi nombre desde scope global: "+miNombre);
console.log("Mi apellido desde scope global: "+miApellido);

//  Ejemplos de como puede ayuar o crear error el tema del scope. 

// Ejemplo 1, cómo con una funcion podemos cambiar el valor de la variable global
var miNombre = "Gonzalo"

function nombre(usuario) {
    miNombre = usuario;
    console.log(miNombre); 
}

nombre("Enrique");

console.log(`Hola ${miNombre}, cómo estás?`);


// Ejemplo 2, cómo podemos evitar reescribir el valor de una variable gracias al scope,
let miNombre = "Gonzalo"

function nombre(usuario) {
    let miNombre = usuario;
    console.log(miNombre); 
}

nombre("Enrique");

console.log(`Hola ${miNombre}, cómo estás?`);

/* Ejemplo 3, cómo si creamos un scope local, y mandamos llamar la variable fuera de la funcion, nos 
puede crear un problema. */
function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre); 
}

nombre("Gonzalo");

console.log(`Hola ${miNombre}, cómo estás?`);


