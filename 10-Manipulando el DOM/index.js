$(document).ready(()=>{


    $('#titulo').text('<u>Nuevo titulo</u> <!--asd-->');//Modifica el texto del html
    $('#titulo2').html('<u>Nuevo titulo</u> <!--asd-->')//Modifica el html
    const nombre = $('#nombre');
    nombre.on('change', ()=>{
        $('#valor').text(nombre.val());//Accediendo al valor de un imput
    });
    $('#enlace').attr('href','https://www.falconmasters.com');//Agregando/modificando atributos.
    // Para varios att al mismo tiempo:
    // $('#enlace').attr({
    //     'href' : 'https://www.falconmasters.com',
    //     'class' : 'ALGO',
    //     'id': 'lalala'
    // })
    

});