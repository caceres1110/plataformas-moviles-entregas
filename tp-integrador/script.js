const apiZorro = "https://randomfox.ca/floof/";

const imagen = document.querySelector("#foto");
const boton = document.querySelector("#nuevaImagen");

async function obtenerZorro() {
    const respuesta = await fetch(apiZorro);

    if (!respuesta.ok) {
        throw new Error("No se pudo cargar la imagen.");
    }
    const datos = await respuesta.json();
    imagen.src = datos.image;
}

async function cargarZorro() {

    try {
        await obtenerZorro();
    } catch (error) {
        console.error(error);
    }
}
boton.addEventListener("click", cargarZorro);
cargarZorro();