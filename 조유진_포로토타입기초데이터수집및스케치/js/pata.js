$(function(){
    $("#bgndVideo").YTPlayer({
        videoURL:'https://www.youtube.com/watch?v=_BxVFgbvNrI',
        containment:'.main_visual',
        autoPlay:true,
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });

    $('.new_sl').slick({
        arrows:false,
        slidesToShow:4,
        slidesToScroll: 4,
        dots:true,
    });
    $('.customer .btn i.xi-angle-left').on('click',function(){
        $('.new_sl').slick('slickPrev');
    });
    $('.customer .btn i.xi-angle-right').on('click',function(){
        $('.new_sl').slick('slickNext');
    });

    $('.bs_sl').slick({
        arrows:false,
        slidesToShow:4,
        slidesToScroll: 4,
        dots:true,
    });
    $('.bs .btn i.xi-angle-left').on('click',function(){
        $('.bs_sl').slick('slickPrev');
    });
    $('.bs .btn i.xi-angle-right').on('click',function(){
        $('.bs_sl').slick('slickNext');
    });



    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    })
    $('.menu>li>a').on('click', function(){
        if($(window).width() < 769) {
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.s_menu').slideUp();
        }

    });



    


});

