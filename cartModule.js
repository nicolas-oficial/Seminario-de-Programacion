const carrito = [];

export function agregarAlCarrito(producto) {
    carrito.push(producto);
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = carrito.length;
    }

    alert(`¡"${producto.nombre}" fue agregado al carrito!`);
}