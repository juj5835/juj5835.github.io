$(function(){
    $('.m_sl').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
    })    

    $('.pf_sl').slick({
        arrows:false,
        slidesToShow:4,
    });

    
    $('.pf .btn i.xi-angle-left').on('click',function(){
        $('.pf_sl').slick('slickPrev');
    });
    $('.pf .btn i.xi-angle-right').on('click',function(){
        $('.pf_sl').slick('slickNext');
    });

    
    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    })
    $('.sub01>li>a').on('click', function(){
        if($(window).width() < 769) {
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.sub02').slideUp();
        }

    });
    // $(window).on('resize', function(){
    //     $('.sub02').removeAttr('style')
    // });

});

