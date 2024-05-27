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

    $('#light-theme-btn').click(function () {
        $('body').removeClass('dark-theme').addClass('light-theme');
    });

    $('#dark-theme-btn').click(function () {
        $('body').removeClass('light-theme').addClass('dark-theme');
    });

    $('.accordion-question').click(function () {
        var answer = $(this).next('.accordion-answer');
        answer.slideToggle(300);
        $(this).toggleClass('active');
    });

    $('.accordion-button').click(function () {
        var content = $(this).next('.accordion-content');
        content.slideToggle(300);
        $(this).toggleClass('active');
    });
});
