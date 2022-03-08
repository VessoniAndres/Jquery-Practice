$('document').ready(()=>{
    //PARENT
        // $('#tercera').parent().css({
        //     background: '#1b3d84'
        // });
    //PARENTS
        // $('#tercera').parents()
    //CHILDRENS
        // $('#padre').children().fadeOut(10000);
        // $('#padre').children('#tercera').fadeOut(5000);
    //Find
        // $('.container').find('div.caja').slideUp();
    //SIBLINGS
        // $('#tercera').siblings().fadeOut();
    //PREV-NEXT
    $('#tercera').prev().css({
        backgroundColor:'#000',
        color: '#fff'
    });
    $('#tercera').prevAll().css({
        width:'100px'
    });
    $('#tercera').next().css({
        backgroundColor:'#666'
    });
    $('#tercera').nextAll().css({
        width: '250px'
    });
});
