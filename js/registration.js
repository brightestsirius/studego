$(document).ready(function() {
    $(".postav").hide();
    $('.fileinput').fileinput()
    $('#checkbox1').change(function(){
        if(this.checked){
            $(".postav").show('slow');
        }
        else {
            $(".postav").hide('slow');
        }
    });
    $.validator.setDefaults({
        submitHandler: function () {
            alert("submitted!");
        }
    });

    $().ready(function () {
        // validate the comment form when it is submitted
        $("#commentForm").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                first: "То, как вас будут видеть пользователи Studego.com",
                email: "Введите валидный E-mail",
                pass: "Введите пароль",
                sec: "Введите имя",
                third: "Введите название компании",
                four: "Введите телефон",
                five: "Введите сайт компании"
            }
        });
    });
});/**
 * Created by BrightestSirius on 23.02.2016.
 */
