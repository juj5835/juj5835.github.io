$(function(){

    $('.main_full').fullpage({
        anchors:['f01', 'f02', 'f03', 'f04'],
        //background-attachement:fixed 활성,
        css3:false,
        //navigation: true,
        afterLoad: function(origin, destination, direction){
            var idx=destination.index;
            console.log(idx);
            $('.section').eq(idx).addClass('on').siblings().removeClass('on');
            $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
        },
    });
    
    $('.umovie').YTPlayer({
        videoURL:'https://youtu.be/SRTFvKv9Qk8',
        containment:"body",
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });
    
    })
