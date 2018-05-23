$(document).ready(function(){
    $(".color-select-button").click(function(){
        var checkDiv = $(this);

    //RED
    if (checkDiv.attr("id") == "button-red") {
        $("#chair-display-img").attr("src","img/chair-red.png");
        $(".more-info-button").attr("id","button-red");
        $(".fa-circle-o").attr("id","element-red");
        $("#product-model-name").data("color","r");
        replaceGalleryColor("r");
    } 
    
    //GREEN
    else if (checkDiv.attr("id") == "button-green") {
        $("#chair-display-img").attr("src","img/chair-green.png");
        $(".more-info-button").attr("id","button-green");
        $(".fa-circle-o").attr("id","element-green");
        $("#product-model-name").data("color","g");
        replaceGalleryColor("g");
    } 
    
    //BLUE
    else if (checkDiv.attr("id") == "button-blue") {
        $("#chair-display-img").attr("src","img/chair-blue.png");
        $(".more-info-button").attr("id","button-blue");
        $(".fa-circle-o").attr("id","element-blue");
        $("#product-model-name").data("color","b");
        replaceGalleryColor("b");
    } 
    
    //WHITE
    else if (checkDiv.attr("id") == "button-white") {
        $("#chair-display-img").attr("src","img/chair-white.png");
        $(".more-info-button").attr("id","button-white");
        $(".fa-circle-o").attr("id","element-white");
        $("#product-model-name").data("color","w");
        replaceGalleryColor("w");
    }
    });
  });

function replaceGalleryColor(color){
    var directory = "img/";
    var model = $("#product-model-name").data('model');
    var fileExt = ".jpg";
    $('.product-photo-mini').each(function() {
        var picId = $(this).attr("id");
        var newMiniSrc = directory+model+"/"+"m"+picId+color+fileExt;      
        $(this).attr("src", newMiniSrc)
    });    
}