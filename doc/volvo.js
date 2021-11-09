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

