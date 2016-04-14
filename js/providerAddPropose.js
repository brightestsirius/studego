$(document).ready(function() {
    $('.design-block').hide();
    $('.hot-tarif').hide();
    $('.banner-tarif').hide();
    $('.vip-block').hide();
    $('.design-foto-block').hide();
    $('#propose-vip').hide();
    $('#propose-hot').hide();
    $('#propose-banner').hide();
    $('[name=propose-vip-img_block]').hide();
    $('[name=propose-vip-color_block]').hide();

    $('.get-price-block').click(function() {
        if ($('#propose-vip:checked')) {
            $('div[name=propose-vip]').fadeIn();
            $(".vip-block").fadeIn();
            $(".all-tarif").fadeOut();
            $(".propose-vip").fadeIn();
            if ($('#propose-vip-color_block:checked').length > 0) {
                $('div[name=propose-vip-color_block]').fadeIn();
                $(".design-block").fadeIn();
            }
            else {
                $(".design-block").fadeOut();
                $('div[name=propose-vip-color_block]').fadeOut();
            }
            if ($('#propose-vip-img_block:checked').length > 0) {
                $(".design-foto-block").fadeIn();
                $('div[name=propose-vip-img_block]').fadeIn();
            }
            else {
                $(".design-foto-block").fadeOut();
                $('div[name=propose-vip-img_block]').fadeOut();
            }
        }
        else {
            $(".vip-block").fadeOut();
            $(".design-block").fadeOut();
            $(".design-foto-block").fadeOut();
        }
        if ($('#propose-hot:checked').length > 0) {
            $(".all-tarif").fadeOut();
            $(".propose-hot").fadeIn();
        }
        if ($('#propose-banner:checked').length > 0) {
            $(".all-tarif").fadeOut();
            $(".propose-banner").fadeIn();
        }
        if ($('[data-target=propose-vip]:checked').length > 0) {
            $('#propose-vip').fadeIn();
            if ($('#propose-vip-img_block:checked').length > 0) {
                $('[name=propose-vip-img_block]').fadeIn();
            }
            else {
                $('[name=propose-vip-img_block]').fadeOut();
            }
            if ($('#propose-vip-color_block:checked').length > 0) {
                $('[name=propose-vip-color_block]').fadeIn();
            }
            else {
                $('[name=propose-vip-color_block]').fadeOut();
            }
        }
        else {
            $('#propose-vip').fadeOut();
        }
        if ($('[data-target=propose-hot]:checked').length > 0) {
            $('#propose-hot').fadeIn();
            $('.propose-hot').fadeIn();
        }
        else {
            $('#propose-hot').fadeOut();
        }
        if ($('[data-target=propose-banner]:checked').length > 0) {
            $('#propose-banner').fadeIn();
            $('.propose-banner').fadeIn();
        }
        else {
            $('#propose-banner').fadeOut();
        }
        $('.none-checked').fadeIn().on( "click", function() {
            $("input[name=check1]").each(function (i) {
                $('input[name=check1]').attr('checked', false);
            });
            $("input[name=service_type]").each(function (i) {
                $('input[name=service_type]').attr('checked', false);
            });
            $('.none-checked').fadeOut();
            $('div[name=propose-vip-img_block]').fadeOut();
            $('div[name=propose-vip-color_block]').fadeOut();
            $('#propose-vip').fadeOut();
            $('.propose-hot').fadeOut();
            $('.propose-banner').fadeOut();
        })
    });
    $('.get-collapse-block').click(function(){
            if($('#propose-vip-color_block:checked').length>0){
                $(".design-block").fadeIn();
            }
            else {
                $(".design-block").fadeOut();
            }
            if($('#propose-vip-img_block:checked').length>0){
                $(".design-foto-block").fadeIn();
            }
            else {
                $(".design-foto-block").fadeOut();
            }
    });
    $('.price-one').each(function() {
        $(this).click(function () {
            $('.price-one').removeClass('active-price-one');
            $(this).addClass('active-price-one')
        })
    });

    $("#hue-demo").change(function () {
        var data = $(this).val();
        $(".new-red").css({ background: data });
        $(".new-red .data-inf, .new-red .data-inf i").css({ background: "white", color: data });
    });

    $('.fileinput').fileinput()
    $.validator.setDefaults({
        submitHandler: function () {
            alert("submitted!");
        }
    });

    $().ready(function () {
        $("#commentForm").validate({

            messages: {
                first: "Введите название компании",
                second: "Выберите категорию",
                third: "Выберите подкатегорию",
                four: "Введите название страны",
                five: "Введите название города",
                six: "Введите раздел",
                seven: "Добавте описание предложения",
                eight: "Укажите срок размещения предложения"
            }
        });
    });
    $('#example1').datepicker({
        format: "dd/mm/yyyy"
    });
    $('#example2').datepicker({
        format: "dd/mm/yyyy"
    });
    $('#example3').datepicker({
        format: "dd/mm/yyyy"
    });
});