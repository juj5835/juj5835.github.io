$(function(){
//---------------------------------------------



$('#forU').fullpage({

    anchors: ['s01','s02','s03','s04','s05'],
    afterLoad: function(origin, destination, d) {
        var idx=destination.index;
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
    }
});


//----------------------------------------------
});