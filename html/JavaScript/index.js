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

            case 'cart':
              window.location.href = 'encuestaSatisfaccion.html';
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
  
  document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.querySelector("[data-action='cart']");
    const cartContainer = document.createElement("div");
    cartContainer.id = "cart-container";
    cartContainer.innerHTML = `
      <h3>Carrito de Compras</h3>
      <ul id="cart-items"></ul>
      <p>Total: $<span id="cart-total">0.00</span></p>
    `;
    cartContainer.classList.add("cart-hidden");
    document.body.appendChild(cartContainer);
  
    const cartItems = [];
    let total = 0;
  
  
    cartButton.addEventListener("click", () => {
      cartContainer.classList.toggle("cart-hidden");
    });
  
  
    const addToCart = (productName, price) => {
      cartItems.push({ name: productName, price: price });
      total += price;
  
  
      const cartList = document.getElementById("cart-items");
      const cartItem = document.createElement("li");
      cartItem.textContent = `${productName} - $${price.toFixed(2)}`;
      cartList.appendChild(cartItem);
  
      // Actualizar total
      document.getElementById("cart-total").textContent = total.toFixed(2);
    };
  
  
    const productButtons = document.querySelectorAll(".add-to-cart");
    productButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const productName = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));
        addToCart(productName, price);
      });
    });
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