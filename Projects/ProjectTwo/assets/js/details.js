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
    waitForEl('#house-details', function () {
        var params = new URLSearchParams(window.location.search);
        var houseId = params.get('id');

        var houses = {
            house1: {
                imgSrc: 'assets/img/house1.jpeg',
                description: 'Family house in Sarajevo with 3 bedrooms, 2 bathrooms, and a beautiful garden.'
            },
            house2: {
                imgSrc: 'assets/img/house2.jpg',
                description: 'Flat house in Dobrinja with 2 bedrooms, 1 bathroom, and a modern kitchen.'
            },
            house3: {
                imgSrc: 'assets/img/house3.jpeg',
                description: 'Perfect house for a married couple, big living room and a garden with barbeque.'
            }
        };

        var house = houses[houseId];
        if (house) {
            var detailsHtml = `
            <img src="${house.imgSrc}" alt="${houseId}">
            <p id="house-description">${house.description}</p>
        `;
        } else {
            $('#house-details').html('<p>House details not found.</p>');
        }
        $('#house-details').html(detailsHtml);



        $(document).on('click', '#edit-btn', function () {
            $('#edit-description').val(house.description);
            $('#edit-modal').css('display', 'flex');
        });

        $(document).on('click', '.close', function () {
            $('#edit-modal').css('display', 'none');
        });

        $('#edit-form').submit(function (e) {
            e.preventDefault();
            var newDescription = $('#edit-description').val();
            house.description = newDescription;
            $('#house-description').text(newDescription);
            $('#edit-modal').css('display', 'none');
            alert('House details updated successfully!');
        });

        $('#delete-btn').click(function () {
            if (confirm('Are you sure you want to delete this house?')) {
                $('#house-details').html('<p>House has been deleted.</p>');
                $('#edit-btn').hide();
                $('#delete-btn').hide();
                alert('House deleted successfully!');
            }
        });
    });

});
