$(function(){
    //-----------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'profile'],
        afterLoad:function(origin, destination, direction){
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });
    

    

    
    $('.cover_btn').on('click', function(){
        $("#cover").slideToggle(); //fadeToggle
    });
    
    
    let cloneMenu = $('nav>ul').clone();
    $('#cover').append(cloneMenu);
    
    $('#cover a').on('click', function(){
        $('#cover').slideUp(); 
    });
    
    $('#cover').on('scroll wheel touchmove', function(){
        return false;
    });
    


// 묵업 내 커서반응--------------------------------------

    $(".case a").on("mouseenter", function(){
        let imgH=$(this).find("img").height();
        let caseH=$(this).height();
        $(this).find("img").css({
            top:-(imgH-caseH)
        })
    });
    $(".case a").on("mouseleave", function(){
        $(this).find("img").css({
            top:0
        })
    })

    
    //-----------------------------------------------------
    })