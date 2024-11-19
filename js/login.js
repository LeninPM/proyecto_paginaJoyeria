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
