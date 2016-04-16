(function ($) {
    $(document).ready(function(){
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200 || $(this).scrollTop() < 10) {
                    $('.cf').fadeIn();
                } else {
                    if ($(this).scrollTop() < 190) {
                        $('.cf').hide();
                    }else {
                        $('.cf').fadeOut();
                    }
                }
                if ($(this).scrollTop() > 200) {
                    $('.cf').addClass('nav-back');
                    $('#search').show();
                }else {
                    $('.cf').removeClass('nav-back');
                    $('#search').hide();
                }
            });
        });
        $('.no-data').hide();
        $('#search').hide();
        $('.show-propose-collapse-hot').hide();
        $('.show-propose-collapse-banner').hide();
        $('.show-propose-collapse-vip').hide();

            $('.find-propose-collapse-hot').click(function() {
                $('.show-propose-collapse-hot').show('slow');
        });
        $('.find-propose-collapse-banner').click(function() {
            $('.show-propose-collapse-banner').show('slow');
        });
        $('.find-propose-collapse-vip').click(function() {
            $('.show-propose-collapse-vip').show('slow');
        });
        $('.demo').each( function() {
            $(this).minicolors({
                control: $(this).attr('data-control') || 'hue',
                defaultValue: $(this).attr('data-defaultValue') || '',
                format: $(this).attr('data-format') || 'hex',
                keywords: $(this).attr('data-keywords') || '',
                inline: $(this).attr('data-inline') === 'true',
                letterCase: $(this).attr('data-letterCase') || 'lowercase',
                opacity: $(this).attr('data-opacity'),
                position: $(this).attr('data-position') || 'bottom left',
                swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
                change: function(value, opacity) {
                    if( !value ) return;
                    if( opacity ) value += ', ' + opacity;
                    if( typeof console === 'object' ) {
                        console.log(value);
                    }
                },
                theme: 'bootstrap'
            });
        });
        $("#hue-dem").change(function () {
            var data = $(this).val();
            $(".new-tub").css({ background: data });
        });
        $("#hue-de").change(function () {
            var data = $(this).val();
            $(".new-gold").css({ color: data });
        });
        $("#hue-d").change(function () {
            var data = $(this).val();
            $(".new-main-color, h2.firm-slogan, h1.firm-name, .designing-page .table-about-firm table tr td a").css('color', data, 'important');
        });
        $("#design_firm-name").keyup(function () {
            var data = $(this).val();
            console.log(data);
            $(".get_design_firm-name").empty().text(data)

        });
        $("#design_firm-slogan").keyup(function () {
            var data = $(this).val();
            console.log(data);
            $("#get_design_firm-slogan").empty().text(data)

        });
        $("#design_firm-tel").keyup(function () {
            var data = $(this).val();
            console.log(data);
            $("#get_design_firm-tel").empty().text(data)

        });
        $("#design_firm-email").keyup(function () {
            var data = $(this).val();
            console.log(data);
            $("#get_design_firm-email").empty().text(data)

        });
        $("#design_firm-page").keyup(function () {
            var data = $(this).val();
            console.log(data);
            $("#get_design_firm-page").empty().text(data)

        });
        $("#design_firm-adress").keyup(function () {
            var data = $(this).val();
            console.log(data);
            $("#get_design_firm-adress").empty().text(data)

        });
        var email;
        $( "#email" )
            .keyup(function() {
                email = $( this ).val();
                console.log(email)
            });
        $( "#enter" ).click(function() {
            if(email=='student@i.ua'){
                window.location.href = '../pages/student/studentProfile.html';
            }
            if(email=='provider@i.ua'){
                window.location.href = '../pages/provider/providerProfile.html';
            }
        });
        $('.add-gl-to-block').click(function () {
            data = $(this).attr('class');
            var classNmae = $('#old-icon').attr('class');
            $('#old-icon').removeClass(classNmae).addClass(data)
        });
       $('.smobitrigger').smplmnu();
        var offset = 220;
        var duration = 500;
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.back-to-top').fadeIn(duration);
            } else {
                jQuery('.back-to-top').fadeOut(duration);
            }
        });
        jQuery('.back-to-top').click(function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
        $( ".header-func" ).each(function(i) {
            $(this).on("click", function(index){
                var idEl = $(this).attr('name');
                console.log(idEl);
                $(".header-small").hide();
                $("."+idEl+"-shown").fadeIn();
                $(".header-func").removeClass('active-header');
                $("."+idEl+"").addClass('active-header');
            });
        });
        $( "#header-sort-txt-1").addClass('header-sort-act');
        $( ".header-sort-txt" ).click(function() {
                $('.header-sort-txt').removeClass('header-sort-act');
                $(this).addClass('header-sort-act');
        });
        $( ".add-foto-prov" ).click(function() {
            var lastName = $(".foto-propose:last").attr('id');
                var newName = +lastName+1;
                $( ".fotos" ).append('<div name="image_'+newName+'" id="'+newName+'" class="foto-propose radio radio-primary add-foto-propose">'+
                    '<input type="radio" name="ad-foto"><label><div class="fileinput fileinput-new" data-provides="fileinput">'+
                    '<div class="fileinput-preview thumbnail" data-trigger="fileinput"><p>Добавте фото предложения</p></div>'+
                    '<div><span class="btn btn-default btn-file"><span class="fileinput-new"><span class="add-foto">Добавить фото</span></span>'+
                    '<input type="file" name="..."></span><a href="#" class="btn btn-default"><i name="image_'+newName+'" class="glyphicon glyphicon-remove del-img"></i></a>'+
                    '</div></div></label></div>');
            var car = $(".foto-propose:visible").length;
            if(car==10){
                $( ".add-foto-prov" ).hide();
            }
            $(".del-img").on("click", function(){
                var idEl = $(this).attr('name');
                var idDiv = $('div[name="'+idEl+'"]').hide();
                var count = $(".foto-propose:visible").length;
                if(count==10){
                    $( ".add-foto-prov" ).hide();
                }
                else {
                    $( ".add-foto-prov" ).show();
                }
                return false;
            });
        });
        var count = $(".foto-propose:visible").length;
        console.log('count='+count+'');
        $(".del-img").on("click", function(){
                var idEl = $(this).attr('name');
                console.log(idEl);
                var idDiv = $('div[name="'+idEl+'"]').hide();
            return false;
        });
        $(function() {
            function displayResult(item) {
                $('.alert').show().html('You selected <strong>' + item.value + '</strong>: <strong>' + item.text + '</strong>');
            }
            $('#find-main').typeahead({
                source: [
                    'cvbcvb',
                    'tertert',
                    'Cwtwetwets',
                    'tyutyu',
                    'Vatyutyur',
                    'Toronto',
                    'Toronto1'],
                scrollBar:true,
                onSelect: displayResult
            });
        });
    });
}(jQuery));
