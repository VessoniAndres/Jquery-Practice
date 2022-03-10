$(document).ready(()=>{

    $('#boton').on('click',function(){
        // .addClass('clase');
        // $(this).addClass('naranja');

        // .removeClass('claseQueQuieroRemover');
        //$(this).removeClass('naranja');

        //.toggleClass('claseQueQuieroAlternar');
        $(this).toggleClass('naranja');

        //.css({props css que quiero modificar});
        // Esta forma no es una buena practica, lo ideal es cambiar las clases, no el css.
        $(this).css({
            'height': '100px',
            'width': '100px'
        });

    });





});