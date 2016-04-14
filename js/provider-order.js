$(document).ready(function() {
    $( ".del-offer" ).click(function() {
        var check = $(this).attr('name');
        $('#'+check+'').hide();

    });
    $( ".del-offer-propose" ).click(function() {
        var check = $(this).attr('name');
        $('#'+check+'').hide();

    });
    $('.price-one').each(function() {
        $(this).click(function () {
            $('.price-one').removeClass('active-price-one');
            $(this).addClass('active-price-one')
        })
    });
});
