function navGoTo(page){
var url = page.getAttribute("id").slice(4);
goToPage(url);
}

function goToPage(pageUrl){
    //checks if the page we want to go to is not the same as the one we are on..
    var atr = $(".content").attr("data-include");    
    if(pageUrl!=atr) {        
        $(".content").attr("data-include", pageUrl);        
        loadComponentContent(pageUrl);
    }        
}