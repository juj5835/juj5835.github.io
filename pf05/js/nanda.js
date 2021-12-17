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

    $('.new_sl').slick({
        arrows:false,
        slidesToShow:4,
        slidesToScroll: 2,
        dots:true,
        
    });
    $('.customer .btn i.xi-angle-left').on('click',function(){
        $('.new_sl').slick('slickPrev');
    });
    $('.customer .btn i.xi-angle-right').on('click',function(){
        $('.new_sl').slick('slickNext');
    });


    $('.mmn_sl').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
    });

    $('.mn_sl').slick({
        arrows:false,
        slidesToShow:4,
        slidesToScroll: 2,
        dots:true,
    });
    $('.mn .btn i.xi-angle-left').on('click',function(){
        $('.mn_sl').slick('slickPrev');
    });
    $('.mn .btn i.xi-angle-right').on('click',function(){
        $('.mn_sl').slick('slickNext');
    });



});    