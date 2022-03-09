$(document).ready(()=>{


    const btnExe = $('#ejecutar');
    const btnStop = $('#parar');
    const caja = $('.caja');

    btnExe.on('click',()=>{
        console.log(caja)
        caja.animate({
            marginLeft: '400px'
        },5000);
        caja.animate({
            marginLeft: '0px'
        },5000);
    });
    btnStop.on('click',()=>{
        // stop(Limpiar animaciones, saltar al final)
        caja.stop();
    });
    // .stop(a,b)
    // a: detener cola animacion, defult: false, true: no sige la proxima animacion.
    // b: saltar al final, defalt: false, true: lleva la animacion inmediatamente al pnto final.

});