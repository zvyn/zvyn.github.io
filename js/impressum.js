+function ($) { "use strict";

    // POPOVER FOR IMPRESSUM-LINK
    // ==========================

    $(function () {
        var content_object = $('#impressum_content').hide()[0]
        var popover = $('#impressum_link').popover({
            toggle: 'popover',
            placement: 'bottom',
            html: true,
            title: 'Impressum <a href="#" id="impressum_close" ' +
                   'class="btn btn-default glyphicon glyphicon-remove"> </a>',
            content: content_object.innerHTML,
        }).on('shown.bs.popover', function() {
            $("#impressum_close").on('click', function(){
                popover.popover('hide')
                console.log("hans\n")
            })
        })
    })
}(jQuery);
