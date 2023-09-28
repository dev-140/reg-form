$(document).ready(function(){
    var isEmail = false;

    $('.step-one-btn').on("click", () => {
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test($('#exampleInputEmail1').val())) {
            isEmail = true;
        } else {
            isEmail = false;
        }

        if ($('.r-input').is(':checked')) {
            if(isEmail == true) {
                console.log("Valid");
                $('.first-step-container').addClass("inactive");
                $('.second-step-container').removeClass("inactive").addClass("form-active");
            } else {
                alert("Complete the form");
            }
        }
         else {
            alert("Complete the form");
        }
    });
    
    $('.step-two-btn').on('click', () => {
        var inputs = $(".checkInput");
        var isInputs = false;

        for(var i = 0; i < inputs.length; i++){
            console.log(($(inputs[i]).val()));
            if(($(inputs[i]).val()) == "") {
                alert("Please Complete The Form");
                i = inputs.length;
                isInputs = false;
            } else {
                isInputs = true;
            }
        }

        if(isInputs == true) {
            $('.second-step-container').addClass("inactive").removeClass("form-active");
            $('.third-step-container').removeClass("inactive").addClass("form-active");
        }
    });

    $('.step-three-btn').on('click', () => {
        var inputs = $(".checkInput2");
        var isInputs = false;
        var isContact = false;

        for(var i = 0; i < inputs.length; i++){
            console.log(($(inputs[i]).val()));
            if(($(inputs[i]).val()) == "") {
                alert("Please Complete The Form");
                i = inputs.length;
                isInputs = false;
            } else {
                isInputs = true;
            }
        }

        var a = $('.sContact').val();
        var b = $('.gContact').val();
        var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        if (filter.test(a) && filter.test(b)) {
            console.log("Valid");
            isContact = true;
        }
        else {
            alert("Input Valid Contact Number");
            isContact = false;
        }

        if(isInputs == true && isContact == true) {
            $('.third-step-container').addClass("inactive").removeClass("form-active");
            $('.fourth-step-container').removeClass("inactive").addClass("form-active");
        }
    });
});
