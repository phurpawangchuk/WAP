$(() => {

    let gameStarted = false;

    $('#start').click(function() {
        gameStarted = true;
        $('#status').text('Game started! Navigate to the "E" without touching the walls.').css({
            'color':'blue'
        });
        $('.trace').remove();
    });
    
    $('.boundary').mouseover(function() {
        if (gameStarted) {
            $('#status').text('You lost! Try again.').css({
               'color': 'red'
            });
            gameStarted = false;
        }
    });

    $('#end').mouseover(function() {
        if (gameStarted) {
            $('#status').text('Congratulations! You won!').css({
                'color': 'green'
             });
            gameStarted = false;
        }
    });

    $('#maze').mousemove(function(event) {
        if (gameStarted) {
           const trace = $('<div class="trace"></div>');
           trace.css({
                top: event.offsetY,
                left: event.offsetX
            });
            $('#maze').append(trace);
            $('.example').text(event.screenX + ","+ event.screenY);
        }
    });
})