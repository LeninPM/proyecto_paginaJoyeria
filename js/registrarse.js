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