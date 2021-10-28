
$(function(){

$('.popup_close').on('click',function(){
    $(this).parent().hide();
})


$('#top_banner .container i').on('click',function(){
    $(this).parent().parent().slideUp();
});


$('#top_banner2 i').on('click', function(){
    $('#top_banner2 .case').toggleClass('on');
    $(this).toggleClass('on');
});

$('#left_banner i').on('click',function(){
    $('#left_banner').toggleClass('on');
    $(this).toggleClass('on');
});

$('#right_banner i').on('click',function(){
    $('#right_banner').toggleClass('on');
    $(this).toggleClass('on');
});


// 따라다니는 베너----------

$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},600)
});

$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    // if(sct>400) {
    //     $('#toTop').fadeIn()
    // }else{
    //     $('#toTop').fadeOut()
    // }
    sct>400 ? $('#toTop').fadeIn() :  $('#toTop').fadeOut();
    $('#scroll_banner').css({top:300+sct})
});






})







