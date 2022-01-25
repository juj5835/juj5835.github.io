$(function(){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 0){
            $('.header').addClass('on')
        }else{
        $('.header').removeClass('on')
       }
    })



    $(".content02 .s_1").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow:4,
        pauseOnHover:false,

    });

    $('.content02 .btn i.xi-angle-left').on('click',function(){
        $('.content02.s_l').slick('slickPrev');
    });
    $('.content02 .btn i.xi-angle-right').on('click',function(){
        $('.content02.s_l').slick('slickNext');
    });

});








