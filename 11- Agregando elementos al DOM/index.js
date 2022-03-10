$(document).ready(()=>{


const contenedor = $('#contenedor');
var contador = 1;
// Agregando un elemento div al contenedor con append(), lo pone al final.
$('#agregar').on('click', ()=>{
    const caja = $('<div></div>').addClass('caja').text(contador);
    contador++;
    contenedor.append(caja);
});

$('#agregar2').on('click', ()=>{
    const caja = $('<div></div>').addClass('caja').text(contador);
    contador++;
    contenedor.prepend(caja);
});
$('#before').on('click', ()=>{
    const caja = $('<div></div>').addClass('caja').text(contador);
    contador++;
    contenedor.before(caja);
});
$('#after').on('click', ()=>{
    const caja = $('<div></div>').addClass('caja').text(contador);
    contador++;
    contenedor.after(caja);
});





});