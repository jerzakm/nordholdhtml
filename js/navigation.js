function navGoTo(page){
var url = page.getAttribute("id").slice(4);
goToPage(url);
}

function goToPage(pageUrl){
    var atr = $(".content").attr("data-include");    
    if(pageUrl!=atr) {        
        $(".content").attr("data-include", pageUrl);                
        var target = $(".content");        
        var file = 'components/'+pageUrl+'.html';
        $(".content").load(file);
        console.log(pageUrl+";"+file);
    }        
}