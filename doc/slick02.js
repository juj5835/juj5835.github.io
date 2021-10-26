$(function(){

//메인슬라이드

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false
    //vertical:true -아래위로 움직인다
});
//제품슬라이드
$('.pr_slider').slick({
    slidesToShow:4,
    arrows:false,
    autoplay:true,
});

$('#content01 .btn i.xi-arrow-left').on('click',function(){
    $('.pr_slider').silk('slickPrev');
});
$('#content01 .btn i.xi-arrow-right').on('click',function(){
    $('.pr_slider').silk('slickNext');
});
})