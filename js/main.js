

$(document).ready(function(){

    var linkInterno = $('a[href^="#"]');

    linkInterno.on('click',function(e) { 

    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ scrollTop : $( href ).offset().top }, 'slow', 'easeInOutExpo');

    });
    
});





