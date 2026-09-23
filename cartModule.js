const carrito = [];

export function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarContador();
    alert(`¡"${producto.nombre}" fue agregado al carrito!`);
}

function actualizarContador() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = carrito.length;
    }
}

function calcularTotal() {
    let total = 0;
    
    carrito.forEach(function(item) {
        total += parseFloat(item.precio);
    });
    
    return total.toFixed(2);
}

export function verCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "🛒 LIBROS EN TU CARRITO:\n\n";
    
    carrito.forEach(function(item, indice) {
        mensaje += `${indice + 1}. ${item.nombre} - $${item.precio}\n`;
    });

    const totalAcumulado = calcularTotal();
    mensaje += `\n-----------------------------------`;
    mensaje += `\nTOTAL A PAGAR: $ ${totalAcumulado}`;
    mensaje += `\n-----------------------------------`;
    mensaje += `\n\nEscribe el NÚMERO del libro que quieras ELIMINAR (o presiona Cancelar):`;

    const respuesta = prompt(mensaje);

    if (respuesta) {
        const numero = parseInt(respuesta);

        if (numero > 0 && numero <= carrito.length) {
            const eliminado = carrito.splice(numero - 1, 1);
            alert(`Eliminaste "${eliminado[0].nombre}" del carrito.`);
            actualizarContador();
        } else {
            alert("Número no válido.");
        }
    }
}