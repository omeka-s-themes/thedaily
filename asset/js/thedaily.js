(function($) {
    $(document).ready(function() {
        $('.search-toggle').click(function() {
            $('#top-nav.open, #search-form').toggleClass('closed').toggleClass('open');
            $('body').toggleClass('search-open');
            if ($('body').hasClass('menu-open')) {
                $('body').removeClass('menu-open');
            }
            $('#query').focus();
        });

        $('.menu-toggle').click(function() {
            $('#search-form.open, #top-nav').toggleClass('closed').toggleClass('open');
            $('body').toggleClass('menu-open');
            if ($('body').hasClass('search-open')) {
                $('body').removeClass('search-open');
            }
            $('#top-nav a').first().focus();
        });

        $('#top-nav a').last().on('keydown', function(e) {
            if (e.keyCode == '9') {
                $('.search-toggle').focus();
            }
        });
    });
})(jQuery)