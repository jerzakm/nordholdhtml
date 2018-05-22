$(document).ready(function(){
    $("#product-photo-modal-navbutton-next").click(function(){
        var current = $('#product-photo-modal-big').attr("src");        
        var start = current.slice(0,-5);
        var id = current.slice(-5,-4);
        var nextNumber = parseInt(id)+(1);
        if(nextNumber==10){
            nextNumber=1;
        }
        var next = start+nextNumber+".jpg";
        $('#product-photo-modal-big').attr("src", next);
    });

    $("#product-photo-modal-navbutton-previous").click(function(){
        var current = $('#product-photo-modal-big').attr("src");        
        var start = current.slice(0,-5);
        var id = current.slice(-5,-4);
        var nextNumber = parseInt(id)-(1);
        if(nextNumber==0){
            nextNumber=9;
        }
        var next = start+nextNumber+".jpg";
        $('#product-photo-modal-big').attr("src", next);
    });
});