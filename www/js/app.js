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
            url: "http://httpbin.org/get",
            method: "GET",
            data: {"name": $('.search-key').val()},
            success: function(data, status) {
                if(status != 'timeout')
                    $('.name-list').append('<li><a href="#">' + data + '</a></li>');
            },
            complete: function(xhr,status){
                $('.name-list').append('<li><a href="#">' + status + '</a></li>');
            },
            error: function(e) {
                $('.name-list').append('<li><a href="#">' + e.message + '</a></li>');
            }
        });
    }

}());