$
(function(){
//-----------------------------------

$('.new_sl').slick({
    arrows:false,
    slidesToShow:4,
    slidesToScroll: 2,
    dots:true,
});
$('#customer .btn i.xi-angle-left').on('click',function(){
    $('.new_sl').slick('slickPrev');
});
$('#customer .btn i.xi-angle-right').on('click',function(){
    $('.new_sl').slick('slickNext');
});


$('.cus_sl').slick({
    arrows:false,
    slidesToShow:4,
    slidesToScroll: 2,
    dots:true,
});
$('#customer02 .btn i.xi-angle-left').on('click',function(){
    $('.cus_sl').slick('slickPrev');
});
$('#customer02 .btn i.xi-angle-right').on('click',function(){
    $('.cus_sl').slick('slickNext');
});




//-----------------------------------
});