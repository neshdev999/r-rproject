function handleFormSubmit() {
    $('#js-whitepaper-form').submit(function(event) {
        event.preventDefault();
        const firstName = $('.firstName').val();
        const lastName = $('.lastName').val();
        $('.formSubmitMessage').text("Message of " + firstName + " " + lastName + " has been sent!");
        $('#js-whitepaper-form').trigger("reset");
    });
}

/* Copyright Year */

function getCopyRightCurrentYear() {
    var today = new Date();
    var year = today.getFullYear();
    return year;
}

document.getElementById("copyRightYear").innerHTML = getCopyRightCurrentYear();

$(handleFormSubmit);