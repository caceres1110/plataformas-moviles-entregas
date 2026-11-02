const apiZorro = "https://randomfox.ca/floof/";

const imagen = document.querySelector("#foto");
const boton = document.querySelector("#nuevaImagen");

async function obtenerZorro() {

    const respuesta = await fetch(apiZorro);

    const datos = await respuesta.json();

    imagen.src = datos.image;
}
boton.addEventListener("click", obtenerZorro);
obtenerZorro();
