$(function(){
 
    $('.header .container .my>ul>a>i').on('click', function(){
        $('.gnb').addClass('on');
        $(this).toggleClass('on');
    });
  

    $('.mclose').on('click', function(){
        $('.gnb').removeClass('on');
    })

    
    $('.menu>li>a').on('click', function(){
        if($(window).width() < 769) {
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.s_menu').slideUp();
        }

    });
   

    $('.m_sl').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
    });
    
    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    })

    $('.bf_sl').slick({
        arrows:false,
        slidesToShow:1,
        slidesToScroll: 1,
        dots:true,
    });
    $('.event02 .btn i.xi-angle-left').on('click',function(){
        $('.bf_sl').slick('slickPrev');
    });
    $('.event02 .btn i.xi-angle-right').on('click',function(){
        $('.bf_sl').slick('slickNext');
    });

});    
