$(document).ready(function () {

    $("main#spapp > section").height($(document).height() - 60);

    var app = $.spapp({ pageNotFound: 'error_404' }); // initialize

    // define routes
    app.route({ view: 'gallery', load: 'gallery.html' });
    app.route({ view: 'viewMore', load: 'viewMore.html' });
    app.route({ view: 'contact', load: 'contact.html' });
    app.route({ view: 'faq', load: 'faq.html' });

    // run app
    app.run();

});