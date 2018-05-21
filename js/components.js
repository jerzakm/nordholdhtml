$(document).ready(loadComponentContent(0));


function loadComponentContent(id){    
    //loading component 0 reloads them all
    if(id==0){
        var includes = $('[data-include]');
        jQuery.each(includes, function(){
            var file = 'components/' + $(this).data('include') + '.html';
            $(this).load(file);
            console.log(id+";"+file);
         });
    } //else it loads by ID
    else {        
        
    }    
}