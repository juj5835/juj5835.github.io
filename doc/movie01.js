$
(function(){
//-----------------------------------

$("#bgndVideo").YTPlayer({
    // <iframe width="1156" height="650" src="https://www.youtube.com/embed/U-9V3o8_QtE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    videoURL:'https://www.youtube.com/watch?v=_BxVFgbvNrI',
    containment:'#visual',
    autoPlay:true,
    mute:true, 
    startAt:0, 
    opacity:1
});
$('#visual i.xi-pause').on('click',function(){
    $('#bgndVideo').YTPPause();
});
$('#visual i.xi-play').on('click',function(){
    $('#bgndVideo').YTPPlay();
});
$('#visual i.xi-tv').on('click',function(){
    $('#bgndVideo').YTPFullscreen();
});




//-----------------------------------
});