$(document).ready(function() {
    
    //open variables
    var premise = '';
    var character = '';
    var verb = '';
    var closer = '';
    var genre = '';
    
    //Plot Options
    var premises = [
        
    ];
    
    var characters = [
        
    ];
    
    var verbs = [
        
    ];
    
    var closers = [
        
    ];
    
    var genres = [
        
    ];
    
    
    $('#generate-button').click(function() {
        $('#loading').fadeTo('fast', 1);
        
        premise = premises[Math.floor(Math. random() * premises.length)];
        character = characters[Math.floor(Math.random() * characters.length)];
        verb = verbs[Math.floor(Math.random() * verbs.length)];
        closer = closers[Math.floor(Math.random() * closers.length)];
        grenre = grenres[Math.floor(Math.random() * grenres.length)];
        
        setTimeout(function() {
            $('#movie-plot').html("<p>" + "GENERATED" + "</p>")
        }, 1200);
    });
});