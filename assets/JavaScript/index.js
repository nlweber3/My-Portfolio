//show word bubble on click then hide
$(document).ready(function () {
    $('#showHiddenBlock').click(function () {
        $('#bubble').fadeIn('slow', function () {
            $('#bubble').delay(5000).fadeOut();
        });
    });
    //time delay on home text
    $('#delay').hide();
    setTimeout(function () {
        $("#delay").show();
    }, 800);
    //hover on cards animates them
    $('.card').hover(
        function () { $(this).toggleClass('animated tada') }
    )
    //arrow show and hide
    $('#arrow-div').hide();
    setTimeout(function () {
        $('#arrow-div').fadeIn();
    }, 2000);
    //hide arrow on page scroll
    $(window).scroll(function () {
        $('#arrow-div').fadeOut();
    });
    //animate nav links
    $('.nav-item').hover(
        function () { $(this).toggleClass('animated pulse') })

    // $('.carousel-control-next').click(function () {
    //     $(".carousel-item").toggleClass('animated hinge')
    // })


});