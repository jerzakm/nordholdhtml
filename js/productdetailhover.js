$(document).ready(function(){
    $(".btn-product-details").mouseover(function(){
        $(".product-hover-detail").css("visibility", "visible");
        $(".product-hover-detail").css("opacity", "1");
    });
    $(".btn-product-details").mouseout(function(){
        $(".product-hover-detail").css("visibility", "hidden");
        $(".product-hover-detail").css("opacity", "0");
    });
});