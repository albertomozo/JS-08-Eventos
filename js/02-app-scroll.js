titulo.innerHTML='01 evento scroll';
window.addEventListener('scroll',()=>{

    const destacado = document.querySelector('.destacado');
    const ubicacion = destacado.getBoundingClientRect();

    console.log(ubicacion);
    if (ubicacion.top <100 ){
        console.log('El elemento destacado esta visible');
    } else {
        console.log('Aun falta');
    }

    if (ubicacion.bottom < window.innerHeight )
    {
        console.log('💻');
    }
   
})