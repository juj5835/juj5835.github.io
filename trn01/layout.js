$(function(){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 0){
            $('.header').addClass('on')
        }else{
        $('.header').removeClass('on')
       }
    })







$('.main_slider').slick({
    arrows:false,
    fade:true,
    dots:true,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
})

});








