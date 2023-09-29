//document. se utiliza en JS para acceder y manipular elementos HTML y contenido en una pagina web.
//querySelector() se utiliza para seleccionar uno o varios elementos HTML en un documento HTML utilizando un selector CSS
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
//estas constantes se crean para poder ver los elementos que estan en el archivo HTML.

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
}); // usamos console para ver a detalle los valores de cada elemento HTML.

//Interaccion de texto con HTML desde JS

// innerText - propiedad que permite acceder al texto contenido dentro de un elemento HTML, excluyendo las etiquetas HTML. Es útil cuando solo necesitas el texto visible y no el HTML.
h1.innerText = "Nuevo titulo <s> modificado";

// innerHTML - propiedad permite acceder al contenido HTML dentro de un elemento HTML y también permite modificar dicho contenido. Puedes obtener el contenido de un elemento o asignarle nuevo contenido utilizando innerHTML.
h1.innerHTML = "Nuevo titulo <s> modificado";

