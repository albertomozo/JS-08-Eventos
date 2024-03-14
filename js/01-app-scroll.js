titulo.innerHTML='01 evento scroll';
window.addEventListener('scroll',()=>{
/*     console.log('scrolling'); */
/*     const scrollPX =window.scrollY;
    console.log(scrollPX); */
    const destacado = document.querySelector('.destacado');
    const ubicacion = destacado.getBoundingClientRect();
    console.log (ubicacion);
})