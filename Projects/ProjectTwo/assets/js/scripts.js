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

    $('#password').on('input', function () {
        var password = $(this).val();
        var strength = getPasswordStrength(password);
        $('#password-strength').text('Strength: ' + strength);
    });

    function getPasswordStrength(password) {
        var strength = 'Weak';
        if (password.length >= 8) {
            strength = 'Medium';
            if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#\$%\^&\*]/.test(password)) {
                strength = 'Strong';
            }
        }
        return strength;
    }

    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            date: {
                required: "Please select a preferred contact date",
                date: "Please enter a valid date"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long"
            }
        },
    });

    $.ajax({
        url: 'assets/data/comments.json',
        method: 'GET',
        dataType: 'json',
        success: function(comments) {
            var comments_list = $('#comments');
            comments.forEach(function(comment) {
                var commentElement = `<div class="userComments">
                    <p><strong>${comment.username}</strong>: ${comment.message}</p>
                </div>`;
                comments_list.append(commentElement);
            });
        },
        error: function() {
            console.error('Failed to load content data.');
        }
    });
});
