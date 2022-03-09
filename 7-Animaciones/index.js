$(document).ready(()=>{

    const btn1 = $('#button1');
    const btn2 = $('#button2');
    const btn3 = $('#button3');
    const btn4 = $('#button4');
    // const [caja1, caja2, caja3, caja4] = $('.caja');
    // no user los objetos seleccionados de esta manera o de lo contrario la animacion se
    // reiniciará. Compatibilidad pobre con destructring.
    // En cambio utilizar este metodo:
    const cajas = $('.caja');
    const cajaX = cajas.first();
    const cajaY = cajas.eq(1);
    const cajaZ = cajas.eq(2);
    const cajaW = cajas.last();

    // Se agranda solo una vez
    btn1.on('click',function(){
        cajaX.animate({
            width: '1000px',
            opacity:'0.2'
        },3000);
    });

    // Se agranda cada vez que aprieto el boton
    btn2.on('click',function(){
        cajaY.animate({
            width: '+=300px'
        },1000);
    });

    // Se corre a la de recha cada vez que aprieto el boton
    btn3.on('click',()=>{
        cajaZ.animate({
            marginLeft:'+=50px',
            backgroundColor: '#000'
        })
    });

    // Jquery no dispone de animaciones para el color, pero si quicieramos hacerla
    // nececitariamos combinar Jquery con JS.
    btn4.on('click', ()=>{
        cajaW.addClass('animacion');
        setTimeout(()=>{cajaW.removeClass('animacion')},3000);
    });

});