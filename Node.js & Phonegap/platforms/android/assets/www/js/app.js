// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    $.support.cors = true;

    /* --------------------------------- Event Registration -------------------------------- */
    $('.search-key').on('keyup', findByName);


    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        $('.name-list').append('<li><a href="#">Searching</a></li>');
        $.ajax({
            url: "http://10.0.0.4:3100",
            type: "get",
            data: {"name": $('.search-key').val()},
            crossDomain: true,
            dataType: "jsonp",
            success: function(data, status) {
                if(status != 'timeout')
                    $('.name-list').append('<li><a href="#">' + data['message'] + '</a></li>');
            },
            complete: function(xhr,status){
                $('.name-list').append('<li><a href="#">' + status + '</a></li>');
            },
            error: function(error) {
                $('.name-list').append('<li><a href="#">' + error.message + '</a></li>');
            }
        });
    }

}());