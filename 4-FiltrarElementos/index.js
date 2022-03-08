$(document).ready(()=>{

    $('.caja').first().css({ background: '#000'});
    $('.caja').last().css({ background: '#770'});

    $('.caja').eq(2).css({background: '#007'});
    $('.caja').filter('#segunda').css({background: '#070'});
    $('.caja').not('#segunda').css({width:'25px'});
});