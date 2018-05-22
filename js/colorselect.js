$(document).ready(function(){
    $(".color-select-button").click(function(){
        var checkDiv = $(this);

    //RED
    if (checkDiv.attr("id") == "button-red") {
        $("#chair-display-img").attr("src","img/chair-red.png");
        $(".more-info-button").attr("id","button-red");
        $(".fa-circle-o").attr("id","element-red");
        replaceMiniGallery("red");
        setmodalColor("red");
    } 
    
    //GREEN
    else if (checkDiv.attr("id") == "button-green") {
        $("#chair-display-img").attr("src","img/chair-green.png");
        $(".more-info-button").attr("id","button-green");
        $(".fa-circle-o").attr("id","element-green");
        replaceMiniGallery("green");
        setmodalColor("green");
    } 
    
    //BLUE
    else if (checkDiv.attr("id") == "button-blue") {
        $("#chair-display-img").attr("src","img/chair-blue.png");
        $(".more-info-button").attr("id","button-blue");
        $(".fa-circle-o").attr("id","element-blue");
        replaceMiniGallery("blue");
        setmodalColor("blue");
    } 
    
    //WHITE
    else if (checkDiv.attr("id") == "button-white") {
        $("#chair-display-img").attr("src","img/chair-white.png");
        $(".more-info-button").attr("id","button-white");
        $(".fa-circle-o").attr("id","element-white");
        replaceMiniGallery("white");
        setmodalColor("white");
    }
    });
  });

function replaceMiniGallery(color){
    $('.product-photo-mini').each(function() {
        var oldSrc = $(this).attr("src");
        var start = oldSrc.substring(0,9);
        var end = oldSrc.slice(-11);    
        newSrc=start+color+end;            
        $(this).attr("src",newSrc);
    });    
}

function setModalColor(color) {
    $('.product-photo-mini').each(function() {
        var oldSrc = $(this).attr("src");
        var start = oldSrc.substring(0,9);
        var end = oldSrc.slice(-4);
        console.log(end);
        newSrc=start+color+end;            
        console.log(newSrc);
        $(this).attr("src",newSrc);
    });
}