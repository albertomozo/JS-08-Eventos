titulo.innerHTML='02 - keypress';
buscador = document.querySelector('#busqueda');

buscador.addEventListener('keypress',(event)=>{
     console.log('escribiendo');
     console.log(event);
     document.getElementById('resultado').style.fontSize = '20px';
     document.getElementById('resultado').style.color = 'blue';
     document.getElementById('resultado').innerHTML = 
     buscador.value.length;

})

/* propuesta desahabilitar el input cuando se llegue a 20 caracteres.*/
