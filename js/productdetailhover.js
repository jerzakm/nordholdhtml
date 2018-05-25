$(document).ready(function(){
    $(".btn-product-details").mouseover(function(){

        var elementWidth =  $(".product-hover-detail").css("width").slice(0,-2);
        var elementHeight =  $(".product-hover-detail").css("height").slice(0,-2);
        var x = this.offsetLeft;
        var y = this.offsetTop;  

        var newX = x-(elementWidth*1.2);
        var newY = y-(elementHeight*1.1);

        if(newY<0) {newY=0;}
        if(newY>300) {newY=200;}

        var color = $("#product-model-name").data("color");
        var model = $("#product-model-name").data("model");        


        if($(this).attr("id")=="btn-cushion1") {            
            var src = "img/"+model+"/detal/"+"1"+color+".jpg";
            $("#detail-card-title").text("Poduszka pod szyję");
            $("#detail-card-text").text(
                "W zestawie otrzymasz dwie poduszki, jedną pod szyję a drugą pod odcinek lędźwiowy. Bez problemu wyregulujesz je aby idealnie dopasowały się do Twojego ciała."
            );
        } 

        else if($(this).attr("id")=="btn-cushion2") {
            var src = "img/"+model+"/detal/"+"2"+color+".jpg";
            $("#detail-card-title").text("Poduszka lędźwiowa");
            $("#detail-card-text").text(
                "Gracze oraz inne osoby spędzający dziennie długie godziny przed komputerem są narażeni na problemy zdrowotne wywołane złą postawą. Dzięki poduszkom wspierających kręgosłup oraz wielu opcjom regulacji dostosujesz fotel do swoich wymagań."
            );
        }

        else if($(this).attr("id")=="btn-armrest") {
            var src = "img/"+model+"/detal/"+"6"+color+".jpg";
            $("#detail-card-title").text("Regulowane podłokietniki");
            $("#detail-card-text").text(
                "Nikt nie lubi godzinami opierać łokci na twardym jak skała plastiku, dlatego też podłokietniki wykonane są z miękkiego, odpornego na odkształcenia materiału zapewniającego wygodę nawet przy długim użytkowaniu. Ponadto, istnieje możliwość regulacji wysokości podłokietników o 6cm oraz ich obrotu w lewo oraz prawo o 30°."
            );
        }

        else if($(this).attr("id")=="btn-backadjust") {
            var src = "img/"+model+"/detal/"+"4"+color+".jpg";
            $("#detail-card-title").text("Regulacja oparcia");
            $("#detail-card-text").text(
                "Oparcie fotela położysz prawie do pozycji 180°! Funkcja idealna do odprężenia się i oglądania wyżej położonego telewizora lub grania na konsoli.  Fotel posiada także system TILT pozwalający na bujanie siedziskiem i zablokowanie go w wybranej pozycji."
            );
        }

        else if($(this).attr("id")=="btn-seat") {
            var src = "img/"+model+"/detal/"+"3"+color+".jpg";
            $("#detail-card-title").text("Wygodne siedzenie");
            $("#detail-card-text").text(
                "Profilowane oparcie i siedzenie zapewniające wygodę i komfort. Gwarancja wysokiej jakości materiałów oraz w razie problemów, szybką naprawę przez profesjonalny serwis w Polsce."
            );
        }

        else if($(this).attr("id")=="btn-wheels") {
            var src = "img/"+model+"/detal/"+"5"+color+".jpg";
            $("#detail-card-title").text("Gumowane kółka");
            $("#detail-card-text").text(
                "Gumowane kółka chroniące panele przed porysowaniem oraz solidna pięcioramienna podstawa."
            );
        }

        console.log(src);

        $("#detail-img").attr("src",src);
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