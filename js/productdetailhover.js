$(document).ready(function(){
    $(".btn-product-details").mouseover(function(){

        var elementWidth =  $(".product-hover-detail").css("width").slice(0,-2);
        var elementHeight =  $(".product-hover-detail").css("height").slice(0,-2);
        var x = this.offsetLeft;
        var y = this.offsetTop;  

        var newX = x-(elementWidth*1.3);
        var newY = y-(elementHeight*1.1);

        if(newY<0) {newY=0;}

        $(".product-hover-detail").css("left", newX);;
        $(".product-hover-detail").css("top", newY);        
        $(".product-hover-detail").css("visibility", "visible");
        $(".product-hover-detail").css("opacity", "1");        
    });
    $(".btn-product-details").mouseout(function(){
        $(".product-hover-detail").css("visibility", "hidden");
        $(".product-hover-detail").css("opacity", "0");
    });
});