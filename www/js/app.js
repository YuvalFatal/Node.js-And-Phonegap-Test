// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */

    /* --------------------------------- Event Registration -------------------------------- */
    $('.search-key').on('keyup', findByName);


    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        $.ajax({
            url: "http://127.0.0.1:8080",
            method: "GET",
            data: {"name": $('.search-key').val()},
            dataType: "jsonp",
            success: function(data, status) {
                $('.name-list').append('<li><a href="#">' + data['message'] + '</a></li>');
            }
        });
    }

}());