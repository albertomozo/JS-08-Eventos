titulo.innerHTML='03 - keypress II ';
buscador = document.querySelector('#busqueda');

buscador.addEventListener('keypress',(event)=>{
     console.log('escribiendo');
     console.log(event);
     document.getElementById('resultado').style.color = 'blue';
     document.getElementById('resultado').innerHTML += 
     `<br>${buscador.value}`;

})

/* propuesta  sacar una alerta cuando en texto se encuentre la palabra area */
