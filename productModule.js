
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
        alert(`Agregaste "${producto.nombre}" al carrito.`);
    });

  
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar";
    btnDelete.style.backgroundColor = "#dc3545"; // Rojo
    btnDelete.style.marginTop = "0.5rem";

    btnDelete.addEventListener("click", function() {
        const confirmar = confirm(`¿Estás seguro de eliminar "${producto.nombre}"?`);
        if (confirmar) {
            card.remove(); 
        }
    });


    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Editar";
    btnEdit.style.backgroundColor = "#ffc107"; // Amarillo
    btnEdit.style.color = "#000";
    btnEdit.style.marginTop = "0.5rem";

    btnEdit.addEventListener("click", function() {
        const nuevoNombre = prompt("Ingrese el nuevo título:", producto.nombre);
        const nuevoPrecio = prompt("Ingrese el nuevo precio:", producto.precio);

        if (nuevoNombre !== null && nuevoPrecio !== null && nuevoNombre.trim() !== "") {
            producto.nombre = nuevoNombre;
            producto.precio = nuevoPrecio;

            title.textContent = producto.nombre;
            price.textContent = `$${producto.precio}`;
        }
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(price);
    card.appendChild(btnCart);
    card.appendChild(btnEdit);
    card.appendChild(btnDelete);

    const catalogContainer = document.getElementById("catalog-container");
    if (catalogContainer) {
        catalogContainer.appendChild(card);
    }
}