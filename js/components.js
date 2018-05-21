$(document).ready(function(){
    var includes = $('[data-include]');
    console.log(includes);
    jQuery.each(includes, function(){
    var file = 'components/' + $(this).data('include') + '.html';
    $(this).load(file);
    });
});