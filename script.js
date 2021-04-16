var height=$('#header').height();

$(window).scroll(function()
{
    if($(this).scrollTop()>height){
        $('.narbar').addClass('fixed');
    }else{
        $('.narbar').removeClass('fixed');
    }
}
);
