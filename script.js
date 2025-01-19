//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
// Obtén el formulario y los campos
const formulario = document.querySelector('.contacto__formulario');
const nombre = document.querySelector('input[type="text"][placeholder="Nombre"]');
const correo = document.querySelector('input[type="email"][placeholder="Correo Electrónico"]');
const asunto = document.querySelector('input[type="text"][placeholder="Asunto"]');
const mensaje = document.querySelector('textarea[placeholder="Mensaje"]');
const mensajeHint = document.createElement('div');  // Elemento para el texto emergente

// Función para validar el correo electrónico
function validarCorreo(correo) {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexCorreo.test(correo);
}

// Función para manejar el envío del formulario
formulario.addEventListener('submit', function(event) {
    // Evitar el envío del formulario si hay errores
    let errores = false;

    // Validación del Nombre
    if (nombre.value.trim() === '') {
        alert('El nombre es obligatorio');
        errores = true;
    }

    // Validación del Correo Electrónico
    if (correo.value.trim() === '') {
        alert('El correo electrónico es obligatorio');
        errores = true;
    } else if (!validarCorreo(correo.value.trim())) {
        alert('Por favor, ingrese un correo electrónico válido');
        errores = true;
    }

    // Validación del Asunto
    if (asunto.value.trim() === '') {
        alert('El asunto es obligatorio');
        errores = true;
    }

    // Validación del Mensaje
    if (mensaje.value.trim() === '') {
        alert('El mensaje no puede estar vacío');
        errores = true;
    } else if (mensaje.value.length < 10) {
        alert('El mensaje debe tener al menos 10 caracteres');
        errores = true;
    } else if (mensaje.value.length > 1000) {
        alert('El mensaje no puede exceder los 1000 caracteres');
        errores = true;
    }

    // Si hay errores, evitar el envío
    if (errores) {
        event.preventDefault(); // Evita que el formulario se envíe
    } else {
        alert('Formulario enviado con éxito');
    }
});

// Añadir el texto emergente cuando el cursor pase por encima del campo mensaje
mensajeHint.textContent = 'Mínimo 10 caracteres, máximo 1000';
mensajeHint.style.position = 'absolute';
mensajeHint.style.bottom = '10px';
mensajeHint.style.right = '10px';
mensajeHint.style.fontSize = '0.9rem';
mensajeHint.style.color = '#555';
mensajeHint.style.display = 'none';

// Agregar el texto emergente en el DOM
mensaje.parentElement.style.position = 'relative'; // Necesario para posicionar el texto emergente dentro del recuadro
mensaje.parentElement.appendChild(mensajeHint);

// Mostrar el mensaje emergente cuando el cursor pase por encima
mensaje.addEventListener('focus', function() {
    mensajeHint.style.display = 'block';  // Muestra el texto cuando el campo es enfocado
});

// Ocultar el mensaje emergente cuando el cursor deje el campo
mensaje.addEventListener('blur', function() {
    mensajeHint.style.display = 'none';  // Oculta el texto cuando el campo pierde el foco
});
