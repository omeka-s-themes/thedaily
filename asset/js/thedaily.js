(function($) {
    $(document).ready(function() {
        $('#search-form').addClass('closed');

        $('.search-toggle').click(function() {
            $('#top-nav.open, #search-form').toggleClass('closed').toggleClass('open');
            $('body').toggleClass('search-open');
            if ($('body').hasClass('menu-open')) {
                $('body').removeClass('menu-open');
            }
            $('input[name="fulltext_search"]').focus()
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

        $('header').click(function(e){
            $target = $(e.target);
            if ($target.is("header")) {
                // close both
                // close search
                if ($('body').hasClass('search-open')) {
                    $('#search-form.open').toggleClass('open').toggleClass('closed');
                    $('body').removeClass('search-open');
                }

                // close navigation
                if ($('body').hasClass('menu-open')) {
                    $('#top-nav').toggleClass('open').toggleClass('closed');
                    $('body').removeClass('menu-open');
                }
            }
            if ($target.is( "#top-nav ul, #top-nav li" )) {
                // close navigation
                if ($('body').hasClass('menu-open')) {
                    $('#top-nav').toggleClass('open').toggleClass('closed');
                    $('body').removeClass('menu-open');
                }
            }
            if ($target.is("#search-form")) {
                // close search
                if ($('body').hasClass('search-open')) {
                    $('#search-form.open').toggleClass('open').toggleClass('closed');
                    $('body').removeClass('search-open');
                }
            }
        });
    });
})(jQuery)
