const boton = document.querySelector('.boton-form'); /* Selecciono el boton del formulario cogiendo su clase (boton-form)*/

boton.addEventListener('click', function(e) { /* Pongo un evento que empieza cuando se hace click en el botón */
    
    const nombre = document.getElementById('nombre').value; /* Obtiene el valor del input de email */
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value; /* Obtiene el mensaje que se ha escrito en el formulario*/
    const lista = document.getElementById('opciones');
    const opcionSeleccionada = lista.options[lista.selectedIndex].text; /* Obtiene el texto de la opción elegida */
    const checkbox = document.getElementById('checkbox').checked; /* Mira si se ha marcado el checkbox */

    /* Muestra todos los datos a través de las variables que se han declarado antes*/
    alert(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}\nOpción seleccionada: ${opcionSeleccionada}\nCheckbox: ${checkbox ? 'Aceptado' : 'No aceptado'}\n\n Formulario enviado correctamente`); 
});
