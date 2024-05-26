$(document).ready(function () {
    $('.thumbnail').click(function () {
        var imgSrc = $(this).attr('data-image');
        var captionText = $(this).siblings('p').text();
        $('#myModal').css('display', 'block');
        $('#modal-img').attr('src', imgSrc);
        $('#caption').text(captionText);
    });

    $('.close').click(function () {
        $('#myModal').css('display', 'none');
    });
});


$(document).ready(function () {
    $('#light-theme-btn').click(function () {
        $('body').removeClass('dark-theme').addClass('light-theme');
    });

    $('#dark-theme-btn').click(function () {
        $('body').removeClass('light-theme').addClass('dark-theme');
    });

    $('.accordion-button').click(function () {
        $(this).toggleClass('active');
        var content = $(this).next('.accordion-content');
        if (content.css('display') === 'block') {
            content.css('display', 'none');
        } else {
            content.css('display', 'block');
        }
    });
});
