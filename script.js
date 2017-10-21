$(document).ready(function() {
    
    //open variables
    var premise = '';
    var character = '';
    var verb = '';
    var closer = '';
    var genre = '';
    
    //Plot Options
    var premises = [
        ' there is no color blue',
        ' humans have no genitals',
        ' everyone is cats',
        ' aliens roam the earth',
        ' humans live on Uranus',
        ' it\'s always night',
        ' it\'s the year 2117',
        ' it\'s the year 1500',
        ' it\'s the 1950s',
        ' humans are aliens pets',
        ' hair is the new currency',
        ' house appliances scream when you plug them in'
    ];
    
    var characters = [
        ' a mad scientist',
        ' an infant girl',
        ' Campus Events Commission',
        ' a stamp collector',
        ' a dachsund puppy',
        ' Lil Wayne',
        ' a snapping turtle',
        ' Bigfoot',
        ' a psychologist',
        ' an animated lamp',
        ' a serial killer',
        ' a mailman',
        ' your worst enemy',
        ' the nerdiest of nerds',
        ' a wet sock',
        ' DJ Khaled',
        ' Joe Bruin',
        ' a 9 year old priest',
        ' Kim Jon Un'        
    ];
    
    var verbs = [
        ' fights an army of hyenas',
        ' lives in fear of a fictitious beast',
        ' paints fingernails',
        ' eats cookies at Diddy Riese',
        ' kicks ass',
        ' finds out they\'re royalty',
        ' tries to ask someone on a date',
        ' enters a beauty pageant',
        ' fails finals',
        ' saves a dying animal',
        ' feeds a squirrel',
        ' lights a fire with a magnifying glass',
        ' arrests someone',
        ' gets through the police academy',
        ' eats an entire pizza alone',
        ' tells an emotional story',
        ' makes a short movie',
        ' yells about everything',
        ' gets Trump impeached',
        ' goes grocery shopping',
        ' sings the national anthem',
        ' gets shipwrecked',
        ' goes on a vacation',
        ' writes a novella',
        ' gets a divorce',
        ' gives birth',
        ' does their taxes',
        ' starts a revolution',
        ' must take a drug test',
        ' tries to become an Olympic athlete'  
    ];
    
    var closers = [
        ' with a sidekick lemur',
        ' with a cactus',
        ' during a really bad heat wave',
        ' under the sea',
        ' without using the letter "J"',
        ' in a cape',
        ' on skis',
        ' wearing a goofy hat',
        ' while eating constantly',
        ' at a UCLA football game',
        ' in the UCLA tunnels',
        ' in Powell library',
        ' without using the letter "E"'
    ];
    
    var genres = [
        'Action',
        'Adventure',
        'Romance',
        'Horror',
        'Comedy',
        'Documentary'
    ];
    
    
    $('#generate-button').click(function() {
        
        premise = premises[Math.floor(Math. random() * premises.length)];
        character = characters[Math.floor(Math.random() * characters.length)];
        verb = verbs[Math.floor(Math.random() * verbs.length)];
        closer = closers[Math.floor(Math.random() * closers.length)];
        genre = genres[Math.floor(Math.random() * genres.length)];
        
        $('#loading').fadeTo('fast', 1);
        
        setTimeout(function() {
            $('#movie-plot').html("<h3 style='font-weight:bold'>" + "Genre: " + genre +"</h3>" + "<br>" +
                                  "<h3>" + "In a world where" + premise + "," + character + verb + closer +"</h3>")
        }, 700);
        
    });
});