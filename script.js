(function($)
 {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 100);
    };

})(jQuery);

$("#holder").each(function(index) {
    var text = $( this ).text();
    $(this).empty();
    $(this).writeText("FULL STACK WEB DEVELOPER");
});
//$("#holder").writeText("This is some text");
