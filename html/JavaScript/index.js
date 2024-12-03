/* boton de la casita y registro */
document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.button');
  
  
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        const action = event.currentTarget.getAttribute('data-action');
        
  
        switch (action) {
          case 'goHome':
            window.location.href = 'index.html';
            break;
  
          case 'profile':
            window.location.href = 'registarse.html';
            break;
  
          default:
            console.log('Acción no definida');
        }
      });
    });
  });
  
  /* Lupa */
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector("[data-action='search']");
    const searchContainer = document.getElementById("search-container");
  
   
    searchContainer.innerHTML = `
      <input type="text" id="search-input" placeholder="Buscar joyas (ej. collares, anillos)...">
      <button id="search-submit">Buscar</button>
    `;
  
    
    searchButton.addEventListener("click", () => {
      searchContainer.classList.toggle("active");
    });
  
   
    const validOptions = ["anillos", "aretes", "brazaletes", "collares"];
  
  
    const searchSubmit = document.getElementById("search-submit");
    searchSubmit.addEventListener("click", () => {
      const query = document.getElementById("search-input").value.trim().toLowerCase();
  
      if (validOptions.includes(query)) {
  
        window.location.href = `../html/${query}.html`;
      } else {
  
        alert("Producto no encontrado. Intenta con: collares, anillos, aretes o brazaletes.");
      }
    });
  });
  
  
  /* Carrito */


  
// Array para almacenar productos en el carrito
const cart = [];

// Maneja el clic en los botones "Agregar al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.getAttribute('data-name');
    const productPrice = parseFloat(this.getAttribute('data-price'));

    // Agrega el producto al carrito
    cart.push({ name: productName, price: productPrice });

    // Muestra el carrito y actualiza su contenido
    updateCart();
  });
});

// Función para actualizar la visualización del carrito
function updateCart() {
  const cartSection = document.getElementById('cart-section');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const buyButton = document.getElementById('buy-button'); // Botón de comprar

  // Limpia la lista de elementos del carrito
  cartItems.innerHTML = '';

  // Agrega cada producto al carrito visualmente con su precio y un botón de eliminación
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - S/. ${item.price.toFixed(2)}`;

    // Botón de eliminación
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.classList.add('remove-item');
    removeButton.addEventListener('click', function() {
      removeItem(index);
    });

    listItem.appendChild(removeButton);
    cartItems.appendChild(listItem);
  });

  // Calcula el total de la compra y lo muestra en soles
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `Total: S/. ${total.toFixed(2)}`;

  // Habilita o deshabilita el botón "Comprar" dependiendo del estado del carrito
  buyButton.disabled = cart.length === 0;

  // Muestra la sección del carrito
  cartSection.classList.add('active');
}

// Función para eliminar un producto del carrito
function removeItem(index) {
  cart.splice(index, 1); // Elimina el producto del array
  updateCart(); // Actualiza la visualización del carrito
}

// Manejador para el botón de cerrar el carrito
document.getElementById('close-cart').addEventListener('click', function() {
  const cartSection = document.getElementById('cart-section');
  cartSection.classList.remove('active');
});

// Manejador para mostrar/ocultar la sección del carrito
document.getElementById('cart-button').addEventListener('click', function() {
  const cartSection = document.getElementById('cart-section');
  cartSection.classList.toggle('active');
});

// Manejador para el botón de "Comprar"
document.getElementById('buy-button').addEventListener('click', function() {
  if (cart.length > 0) {
    alert('¡Gracias por tu compra! Procesaremos tu pedido.');
    // Aquí puedes agregar la lógica para redirigir a una página de pago o completar la compra
    cart.length = 0; // Vacía el carrito
    updateCart(); // Actualiza la visualización del carrito
  }
});

// Manejador para el botón "Comprar"
document.getElementById('buy-button').addEventListener('click', function() {
  // Muestra un cuadro de confirmación
  const confirmPurchase = window.confirm('¿Estás seguro de que quieres realizar la compra?');

  if (confirmPurchase) {
    // Redirige a la página de encuesta si se acepta la compra
    window.location.href = 'encuestaSatisfaccion.html';
  }
});

  /* login */
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-register');
    const emailInput = form.querySelector('input[name="userEmail"]');
    const passwordInput = form.querySelector('input[name="userPassword"]');
    const alertaError = document.querySelector('.alerta-error');
    const alertaExito = document.querySelector('.alerta-exito');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
        alertaError.style.display = 'none';
        alertaExito.style.display = 'none';

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '' || password === '') {
            alertaError.style.display = 'block';
            alertaError.textContent = 'Todos los campos son obligatorios';
        } else {
            alertaExito.style.display = 'block';
            alertaExito.textContent = 'Te registraste correctamente';

            // Redirigir al usuario a la página inicial después de un breve retraso
            setTimeout(() => {
                window.location.href = '../html/index.html';
            }, 3000); // 2000 ms = 2 segundos de espera antes de redirigir
        }
    });
});

/* registrarse */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-register");
  const alertaError = document.querySelector(".alerta-error");
  const alertaExito = document.querySelector(".alerta-exito");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtener valores de los campos del formulario
    const nombre = form.userName.value.trim();
    const apellido = form.userLastName.value.trim();
    const dni = form.userDNI.value.trim();
    const correo = form.userEmail.value.trim();
    const contraseña = form.userPassword.value.trim();

    // Validar que todos los campos estén completos
    if (!nombre || !apellido || !dni || !correo || !contraseña) {
      alertaError.style.display = "block";
      alertaExito.style.display = "none";
      return;
    }

    // Si todos los campos están completos
    alertaError.style.display = "none";
    alertaExito.style.display = "block";

    // Esperar unos segundos antes de redirigir al login
    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000); // Redirige después de 2 segundos
  });
});