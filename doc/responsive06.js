$(function(){
    $('.depth01>ul>li>a').on('click',function(){
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();

    })


})