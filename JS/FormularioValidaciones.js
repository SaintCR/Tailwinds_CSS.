    const form = document.getElementById('register-form');
    const submitBtn = document.getElementById('submit-btn');

    // Agregar evento al botón de enviar
    submitBtn.addEventListener('click', function() {
      // Validar el formulario
      if (form.checkValidity()) {
        // Obtener los valores de los campos
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
          alert('Las contraseñas no coinciden');
          return;
        }

        // Mostrar la alerta de registro exitoso
        alert('Registro exitoso');

        window.location.href = 'Index.html';
      } else {
        alert('Por favor completa todos los campos');
      }
    });