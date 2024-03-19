
//evento de input y textarea 
const datos = {
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");
 
nombre.addEventListener("input", leerTexto);
nombre.addEventListener("input", leerTexto);
nombre.addEventListener("input", leerTexto);

//el evento de submit 
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //Validar Formulario 
    const {nombre, email, mensaje} = datos; 

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarError("Todos los campos son obligatorios");
        return;
    }

    mostrarMensaje("Enviado Correctamente");
}); 

function leerTexto(e){
    datos[e.target.id] = e.target.value;
}

//Muestra error en pantalla 
function mostrarMensaje(mensaje) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje; 
    alerta.classList.add("correcto");
    formulario.appendChild(alerta); 

    setTimeout(() => {
        alerta.remove();  
    }, 5000);

}

function mostrarError(mensaje) { 
    const error = document.createElement("P"); //crea parafo HTML
    error.textContent = mensaje; //agrega el mensaje 
    error.classList.add("error"); //agrega la clase en el parrago HTML para editarlo con CSS 
    formulario.appendChild(error); //agrega el error en la parte del formulario en HTML
    
    setTimeout(() => {
        error.remove();  
    }, 5000);
}


