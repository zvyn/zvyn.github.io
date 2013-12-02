+function ($) { "use strict";

    // POPOVER FOR IMPRESSUM-LINK
    // ==========================

    $(function () {
        var content_object = $('#impressum_content').hide(
            function(){$("body").fadeIn()});
        $('#impressum_link').on('click', function(){
            content_object.toggle('slow');
        });
    });
}(jQuery);
