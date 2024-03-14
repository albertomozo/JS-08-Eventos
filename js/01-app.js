titulo.innerHTML='01 Introdución keypress'; 
buscador = document.querySelector('#busqueda');

buscador.addEventListener('keypress',(event)=>{
     console.log('escribiendo');
     console.log(event);
})

// eventos a cambiar para probar copy paste cut 