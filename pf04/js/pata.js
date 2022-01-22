$(function(){
    $('.m_sl').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:false,
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
        slidesToScroll: 2,
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

    $(window).on("scroll",function(){
        var sct=$(window).scrollTop();
        var this_top=$(".sp").offset().top;
        console.log(sct);
        console.log(this_top);
        if(sct>this_top-600){
            $(".sp").addClass("on"); 
        }else{
            $(".sp").removeClass("on"); 
        }
    }); 

    


});

