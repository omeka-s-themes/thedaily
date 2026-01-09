(function($) {
    $(document).ready(function() {
        $('header').on('click', '.modal-close', function() {
            const dialogElement = $(this).parents('dialog');
            const dialogId = dialogElement.attr('id');
            const dialog = document.getElementById(dialogId);
            dialog.close();

        });

        $('header').on('click', '.search-toggle', function() {
            const navModal = document.getElementById('search-modal');
            navModal.showModal();
        });

        $('header').on('click', '.menu-toggle', function() {
            const navModal = document.getElementById('nav-modal');
            navModal.showModal();
        });

        $('#top-nav a').last().on('keydown', function(e) {
            if (e.keyCode == '9') {
                $('.search-toggle').focus();
            }
        });

        $('document').on('click', function(e){
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
