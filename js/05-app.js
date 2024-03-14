titulo.innerHTML='05 - Submit';


const formulario  = document.querySelector('#formulario');

formulario.addEventListener('submit',(event)=>{
    //event.preventDefault();
     console.log('enviando');
     console.log(event);
})

// preventDefault() 
