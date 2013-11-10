+function ($) { "use strict";

    // POPOVER FOR IMPRESSUM-LINK
    // ==========================

    $(window).on('load', function () {
        var content_object = $('#impressum_content').hide()[0]
        var popover = $('#impressum_link').popover({
            toggle: 'popover',
            placement: 'bottom',
            html: true,
            title: '<a href="https://en.wikipedia.org/wiki/Impressum">What is that?</a><a href="#" id="impressum_close" class="btn btn-default glyphicon glyphicon-remove"> </a>',
            content: content_object.innerHTML,
        }).on('shown.bs.popover', function() {
            console.log(this)
            $("#impressum_close").on('click', function(){
                popover.popover('hide')
            })
        })
    })
}(jQuery);
