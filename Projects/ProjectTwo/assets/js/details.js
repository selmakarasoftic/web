$(document).ready(function () {
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
});
