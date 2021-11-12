$
(function(){
//-----------------------------------

$("#bgndVideo").YTPlayer({
    
    videoURL:'https://youtu.be/SRTFvKv9Qk8',
    containment:'#visual',
    autoPlay:true,
    mute:true, 
    startAt:0, 
    opacity:1
});

$('.info_sl').slick({
    arrows:false,
    slidesToShow:3,
    dots:true,
});

$('.m_sl').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    pauseOnFocus:false,
});
// $('#visual i.xi-pause').on('click',function(){
//     $('#bgndVideo').YTPPause();
// });
// $('#visual i.xi-play').on('click',function(){
//     $('#bgndVideo').YTPPlay();
// });
// $('#visual i.xi-tv').on('click',function(){
//     $('#bgndVideo').YTPFullscreen();
// });




//-----------------------------------
});

