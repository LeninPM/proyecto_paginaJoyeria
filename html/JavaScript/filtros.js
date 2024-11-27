// Filtros y productos
document.getElementById('seguro').addEventListener('change', filtrarProductos);
document.getElementById('longitud').addEventListener('change', filtrarProductos);
document.getElementById('piedras').addEventListener('change', filtrarProductos);

function filtrarProductosTipoAretes() {
    const seguroFiltro = document.getElementById('seguro').value;
    const longitudFiltro = document.getElementById('longitud').value;
    const piedraFiltro = document.getElementById('piedras').value;
    const productos = document.querySelectorAll('.card');

    productos.forEach(producto => {
        const tipoSer = producto.getAttribute('data-seguro');
        const tipoLong = producto.getAttribute('data-long');
        const tipoPie = producto.getAttribute('data-piedras');
        let mostrar = true;

        // Filtro por tipo
        if (seguroFiltro !== 'todos' && tipoSer !== seguroFiltro) {
            mostrar = false;
        }

        if (longitudFiltro !== 'todos' && tipoLong !== longitudFiltro) {
            mostrar = false;
        }

        if (piedraFiltro !== 'todos' && tipoPie !== piedraFiltro) {
            mostrar = false;
        }

        // Mostrar u ocultar el producto según el filtro
        producto.style.display = mostrar ? 'inline-block' : 'none';
    });
}

function filtrarProductosTipo() {
    const tipoFiltro = document.getElementById('tipo').value;
    const productos = document.querySelectorAll('.card');

    productos.forEach(producto => {
        const tipo = producto.getAttribute('data-tipo');
        
        let mostrar = true;

        // Filtro por tipo
        if (tipoFiltro !== 'todos' && tipo !== tipoFiltro) {
            mostrar = false;
        }

        // Mostrar u ocultar el producto según el filtro
        producto.style.display = mostrar ? 'inline-block' : 'none';
    });
}

function actualizarPrecio() {
    // Obtener el valor del rango de precios
    let price = document.getElementById("price-range").value;
    let priceLabel = document.getElementById("price-label");
    
    // Mostrar el rango de precios
    priceLabel.textContent = `0 - ${price}`;

    // Filtrar los productos
    filterProducts(price);
}

function filterProducts(maxPrice) {
    // Obtener todos los productos
    let productos = document.querySelectorAll(".card");

    productos.forEach(producto => {
        let precio = producto.getAttribute("data-precio");

        // Mostrar u ocultar según el precio
        if (parseInt(precio) <= maxPrice) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
}

// Llamar a la función de filtro al inicio para cargar correctamente el catálogo
filterProducts(document.getElementById("price-range").value);
