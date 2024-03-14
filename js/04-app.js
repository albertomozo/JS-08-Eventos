titulo.innerHTML='04 - Teclado ';
//document.getElementById('#curso').style.diplay='none'; // quitamos el formulario

window.onload = function() {
    document.onkeyup = muestraInformacion;
    document.onkeyup = muestraInformacion;
    //document.onkeyup = manejador;
    document.onkeydown = muestraInformacion;
    document.onkeypress = muestraInformacion;
} 

function muestraInformacion(elEvento) {
    let evento = window.event || elEvento;

    let mensaje = "Tipo de evento: " + evento.type + "<br>" +
                "Propiedad keyCode: " + evento.keyCode + "<br>" +
                "Propiedad charCode: " + evento.charCode + "<br>" +
                "Carácter pulsado: " + String.fromCharCode(evento.charCode);

                info.style.backgroundColor = "white"
                info.innerHTML += "<br>--------------------------------------<br>" + mensaje
}

function manejador(elEvento) {
  let evento = elEvento || window.event;
  let caracter = evento.charCode || evento.keyCode;
  info.innerHTML +="El carácter pulsado es: " + String.fromCharCode(caracter);
}