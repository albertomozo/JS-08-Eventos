const  imagenes = ['foto01.jpg','foto02.jpg','foto03.jpg']
let imgRandom = getRandomInt(imagenes.length); 
let htmlGaleria= '<div id="galeria">';
for (let i =0 ; i<imagenes.length;i++)
{
    
    let destacado = '';
    // el i que conincida con el random se marca como destacado.
    if (i==imgRandom) { destacado = 'destacado'}
    htmlGaleria +=  `<article id="foto-${i}" class="${destacado}"><img src="img/${imagenes[i]}" width="100%" ></article>`
}
htmlGaleria += '</div>';
document.getElementById('info').innerHTML= htmlGaleria;

// funcion que obtiene un numero al azar del 0 al parametro
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}