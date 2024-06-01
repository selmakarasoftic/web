var waitForEl = function (selector, callback) {
    if (jQuery(selector).length) {
        callback();
    } else {
        setTimeout(function () {
            waitForEl(selector, callback);
        }, 100);
    }
};
$(document).ready(function () {
    $(document).on('click', '.thumbnail', function () {
        var imgSrc = $(this).attr('data-image');
        var captionText = $(this).siblings('p').text();
        $('#myModal').css('display', 'block');
        $('#modal-img').attr('src', imgSrc);
        $('#caption').text(captionText);
    });

    $(document).on('click', '.close', function () {
        $('#myModal').css('display', 'none');
    });

    $(document).on('click', '#light-theme-btn', function () {
        $('body').removeClass('dark-theme').addClass('light-theme');
    });

    $(document).on('click', '#dark-theme-btn', function () {
        $('body').removeClass('light-theme').addClass('dark-theme');
    });

    $(document).on('click', '.accordion-question', function () {
        var answer = $(this).next('.accordion-answer');
        answer.slideToggle(300);
        $(this).toggleClass('active');
    });

    $(document).on('click', '.accordion-button', function () {
        var content = $(this).next('.accordion-content');
        content.slideToggle(300);
        $(this).toggleClass('active');
    });

    $(document).on('input', '#password', function () {
        var password = $(this).val();
        var strength = getPasswordStrength(password);
        if (strength !== undefined) $('#password-strength').text('Strength: ' + strength);
        else $('#password-strength').text('');
    });

    function getPasswordStrength(password) {
        if (password.length >= 8) {
            var symbols = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            var numbers = /\d/;
            var strength = 'Weak';
            if (numbers.test(password)) {
                strength = 'Medium';
                if (symbols.test(password)) {
                    strength = 'Strong';
                }
            }
            return strength;
        }
    }

    waitForEl('#contact-form', function () {
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
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long"
                }
            },
        });
    });


    $(document).on('submit', '#contact-form', function (e) {
        e.preventDefault();
        var name = this.name.value;
        var email = this.email.value;
        var password = this.password.value;
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));

        toastr.success('Form submitted successfully!');

        this.reset();
        $('#password-strength').text('');
    });




    $(document).on('click', '.view-more', function () {
        var houseId = $(this).attr('data-id');
        window.location.href = '?id=' + houseId + '#viewMore';
    });

    $.when($('#comments')).then(() => {
        $.ajax({
            url: 'assets/data/comments.json',
            method: 'GET',
            dataType: 'json',
            success: function (comments) {
                var comments_list = $('#comments');
                comments.userComments.forEach(function (comment) {
                    var commentElement = `<div class="userComments">
                <p><strong>${comment.username}</strong>: ${comment.message}</p>
            </div>`;
                    comments_list.append(commentElement);
                });
            },
            error: function (error) {
                console.error(error);
            }

        });
    });

});