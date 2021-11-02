$
(function(){
//-----------------------------------

$("#bgndVideo").YTPlayer({
    // <iframe width="1156" height="650" src="https://youtu.be/_mW12jiBCpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    videoURL:'https://youtu.be/_mW12jiBCpY',
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

$('#mv01').YTPlayer({
    videoURL:'https://youtu.be/9k2h431TB88',
    containment:'self',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});

$('#customer i.xi-pause').on('click', function(){
    $('#bgndVideo').YTPPause();
});
$('#customer i.xi-play').on('click', function(){
    $('#bgndVideo').YTPPlay();
});
$('#customer i.xi-tv').on('click', function(){
    $('#bgndVideo').YTPFullscreen();
});



//-----------------------------------
});

