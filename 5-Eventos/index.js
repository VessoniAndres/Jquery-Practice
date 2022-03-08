$(document).ready(()=>{
    const btn = $('#boton');
    const btn2 = $('#botonDos');
    const touch = ()=>{
        alert('are you touching me?');
    };
    btn.on('click',touch);
    btn.on('mouseenter',()=>{document.body.style.background='#000'});
    btn.on('mouseleave',()=>{document.body.style.background='#fff'});
    btn2.on('click',()=>{
        btn.off('click');
    })
    $('a').on('click',(e)=>{
        e.preventDefault();
        alert('enlace desactivado');
    })
});