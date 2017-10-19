$(document).ready(function() {
    
    $('#generate-button').click(function() {
        $('#loading').fadeTo('fast', 1);
        
        setTimeout(function() {
            $('#movie-plot').html("<p>" + "GENERATED" + "</p>")
        }, 1500);
    });
});