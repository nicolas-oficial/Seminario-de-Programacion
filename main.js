import { crearTarjetaProducto } from "./productModule.js";
import { verCarrito } from "./cartModule.js";

const productForm = document.getElementById("product-form");

productForm.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("product-name").value;
    const imagen = document.getElementById("product-image").value;
    const precio = document.getElementById("product-price").value;
    const categoria = document.getElementById("product-category").value;

    const nuevoProducto = {
        nombre: nombre,
        imagen: imagen,
        precio: precio,
        categoria: categoria
    };

    crearTarjetaProducto(nuevoProducto);
    productForm.reset();
});

const cartIcon = document.getElementById("cart-icon");
if (cartIcon) {
    cartIcon.style.cursor = "pointer"; 
    cartIcon.addEventListener("click", function() {
        verCarrito();
    });
}