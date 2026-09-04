
import { crearTarjetaProducto } from "./productModule.js";

// Captura  el formulario del HTML
const productForm = document.getElementById("product-form");

// Escucha el submit
productForm.addEventListener("submit", function(evento) {
    
    evento.preventDefault();  // para que la pág no se recargue.

    // tomo valores de los inputs
    const nombre = document.getElementById("product-name").value;
    const imagen = document.getElementById("product-image").value;
    const precio = document.getElementById("product-price").value;
    const categoria = document.getElementById("product-category").value;

    // Creo el objeto con los datos del producto
    const nuevoProducto = {
        nombre: nombre,
        imagen: imagen,
        precio: precio,
        categoria: categoria
    };

    // Llamo a la función para mostrar la tarjeta 
    crearTarjetaProducto(nuevoProducto);

    // Limpiar formulario 
    productForm.reset();
});