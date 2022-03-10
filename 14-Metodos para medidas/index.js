$(document).ready(()=>{


const titulo = $('#titulo');
const info = $('#info');

//Retorna el ancho sin tener en cuenta paddings ni margenes ni bordes;
info.append('Ancho: '+ titulo.width() +'<br>');
//Retorna el ancho teniendo en cuenta el padding;
info.append('Ancho Interno: '+ titulo.innerWidth() +'<br>');
//Retorna el ancho teniendo en centa el padding y el borde;
info.append('Ancho Externo: '+ titulo.outerWidth() +'<br>');
//Retorna el ancho total 100% real no fake(padding, ancho, borde, y margen);
info.append('Ancho Total: '+ titulo.outerWidth(true) +'<br>');

// Retorna el Alto sin tener en cuenta paddings ni margenes ni bordes;
info.append('Alto: '+ titulo.height() +'<br>');
// Retorna el Alto teniendo en cuenta el padding
info.append('Alto Interno: '+ titulo.innerHeight() +'<br>');
// Retorna el Alto teniendo en cuenta el padding y el borde;
info.append('Alto Externo: '+ titulo.outerHeight() +'<br>');
// Retorna el Alto total 100% real no fake(padding, ancho, borde, y margen);
info.append('Alto Total: '+ titulo.outerHeight(true) +'<br>');

});