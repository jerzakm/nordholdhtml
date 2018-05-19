$(document).ready(function(){
    $(".color-select-button").click(function(){
        var checkDiv = $(this);
    if (checkDiv.attr("id") == "red") {
        $("#chair-display-img").attr("src","img/chair-red.png");
    } else if (checkDiv.attr("id") == "green") {
        $("#chair-display-img").attr("src","img/chair-green.png");
    } else if (checkDiv.attr("id") == "blue") {
        $("#chair-display-img").attr("src","img/chair-blue.png");
    } else if (checkDiv.attr("id") == "white") {
        $("#chair-display-img").attr("src","img/chair-white.png");
    }
    });
  });