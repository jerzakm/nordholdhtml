$(document).ready(function(){
    $("#product-photo-modal-navbutton-next").click(function(){
        var current = $("#testdata").data("photoid");
        var next = parseInt(current)+1;
        if(next==10){next=1;}
        $("#testdata").data("photoid",next);
        var directory ="img/";
        var color = $("#product-model-name").data("color");
        var model = $("#product-model-name").data("model");
        var src = directory+model+"/"+next+color+".jpg";            
        $('#product-photo-modal-big').attr("src", src);
    });

    $("#product-photo-modal-navbutton-previous").click(function(){
        var current = $("#testdata").data("photoid");
        var next = parseInt(current)-1;
        if(next==00){next=9;}
        $("#testdata").data("photoid",next);
        var directory ="img/";
        var color = $("#product-model-name").data("color");
        var model = $("#product-model-name").data("model");
        var src = directory+model+"/"+next+color+".jpg";            
        $('#product-photo-modal-big').attr("src", src);
    });

    $(".product-photo-mini").click(function(){         
        var directory ="img/";
        var picId = $(this).attr("id");    
        var modalPicId = $("#testdata").data("photoid",picId);
        var color = $("#product-model-name").data("color");
        var model = $("#product-model-name").data("model");
        var src = directory+model+"/"+picId+color+".jpg";        
        $("#product-photo-modal-big").attr("src",src);
    });
});