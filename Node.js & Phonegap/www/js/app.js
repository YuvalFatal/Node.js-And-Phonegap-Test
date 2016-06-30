// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    $.support.cors = true;
    var socket = io.connect("http://10.0.0.11:3100");
    var name = "yuval";

    /* --------------------------------- Event Registration -------------------------------- */
    $('#submit').on('click', sendRequest);
    socket.on('chat message', addMessage);
    socket.on('twitt', addTwitt);


    /* ---------------------------------- Local Functions ---------------------------------- */
    function sendRequest(){
        if($('#message').val().length == 0)
            return false;

        if($('#message').val().split(' ')[0] == "gt" && $('#message').val().split(' ').length > 1 && $('#message').val().split(' ')[1].length != 0){
            var num_twitts = 1;

            if($('#message').val().split(' ').length > 2 && !isNaN($('#message').val().split(' ')[2]))
                num_twitts = parseInt($('#message').val().split(' ')[2]);

            socket.emit('twitt', {name: 'test', user_name: String($('#message').val().split(' ')[1]), count: num_twitts});
        } else {
            socket.emit('chat message', {name: 'test', 'mes': $('#message').val()});
        }

        $('#message').val('');
        return false;
    }

    function addMessage(msg){
        if(msg['name'] == name)
            $('#messages').append('<li id="myMsg">' + msg['mes'] + "</li>");
        else
            $('#messages').append($('<li>').html('<span>' + msg['name'] + '</span>: ' + msg['mes']));

        focusOnLastElement();
    }

    function addTwitt(twitt){
        if(twitt['name'] == name)
            $('#messages').append('<li id="myMsg">' + twitt['num_twitt'] + twitt['html'] + '<script async src="lib/widgets.js" charset="utf-8"></script>' + "</li>");
        else
            $('#messages').append('<li><span>' + twitt['name'] + '</span>:' + twitt['num_twitt'] + twitt['html'] + '<script async src="lib/widgets.js" charset="utf-8"></script>' + "</li>");

        focusOnLastElement();
    }

    function focusOnLastElement(){
        $('html, body').scrollTop($("#messages li").last().offset().top);
    }

}());