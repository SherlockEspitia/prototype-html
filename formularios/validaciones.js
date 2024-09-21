document.getElementById('propietarioForm').addEventListener('submit', function(event) {
    event.preventDefault()
    let valid = true;

    // Validar nombres
    const nombres = document.getElementById('nombres');
    const nombresError = document.getElementById('nombresError');
    if (nombres.value.trim() === '') {
        nombresError.textContent = 'Este campo es obligatorio.';
        if( !/^[a-zA-z]/.test(nombres)){
            nombresError.innerText="Ingrese solo letras"
        }
        valid = false;
    } else {
        nombresError.textContent = '';
    }

    // Validar apellidos
    const apellidos = document.getElementById('apellidos');
    const apellidosError = document.getElementById('apellidosError');
    if (apellidos.value.trim() === '') {
        apellidosError.textContent = 'Este campo es obligatorio.';
        valid = false;
    } else {
        apellidosError.textContent = '';
    }

    // Validar correo electrónico
    const correo = document.getElementById('correo_electronico_propietario');
    const correoError = document.getElementById('correoError');
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo.value)) {
        correoError.textContent = 'Ingrese un correo electrónico válido.';
        valid = false;
    } else {
        correoError.textContent = '';
    }

    // Validar teléfono
    const telefono = document.getElementById('telefono_propietario');
    const telefonoError = document.getElementById('telefonoError');
    if (telefono.value.trim() === '') {
        telefonoError.textContent = 'Este campo es obligatorio.';
        valid = false;
    } else {
        telefonoError.textContent = '';
    }

    // Validar dirección
    const direccion = document.getElementById('direccion_propietario');
    const direccionError = document.getElementById('direccionError');
    if (direccion.value.trim() === '') {
        direccionError.textContent = 'Este campo es obligatorio.';
        valid = false;
    } else {
        direccionError.textContent = '';
    }

    // Validar ciudad
    const ciudad = document.getElementById('ciudad_propietario');
    const ciudadError = document.getElementById('ciudadError');
    if (ciudad.value.trim() === '') {
        ciudadError.textContent = 'Este campo es obligatorio.';
        valid = false;
    } else {
        ciudadError.textContent = '';
    }

    if (!valid) {
        event.preventDefault();
    }
});