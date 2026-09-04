
export function crearTarjetaProducto(producto) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.nombre;

    const title = document.createElement("h3");
    title.textContent = producto.nombre;

    const category = document.createElement("p");
    category.textContent = `Categoría: ${producto.categoria}`;
    category.style.fontSize = "0.9rem";
    category.style.color = "#666";

    const price = document.createElement("p");
    price.textContent = `$${producto.precio}`;
    price.style.fontWeight = "bold";

    const btnCart = document.createElement("button");
    btnCart.textContent = "Agregar al carrito";

    
    btnCart.addEventListener("click", function() {
        console.log(`¡Producto agregado al carrito: ${producto.nombre}!`);
        alert(`Agregaste "${producto.nombre}" al carrito.`);
        
        //  lógica del carrito (cartModule.js)
    });

    // Para armar la tarjeta
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(price);
    card.appendChild(btnCart);

    // poner tarjeta en la página
    const catalogContainer = document.getElementById("catalog-container");
    if (catalogContainer) {
        catalogContainer.appendChild(card);
    }
}