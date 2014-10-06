'use strict';

console.log('\'Allo \'Allo! Popup');

$(document).ready(function(){
    $("#switcher").click(function( event ) {
        event.preventDefault();
        var node = $(this);
        if (node.find("span[class='glyphicon glyphicon-eye-close']").is(":visible")) {
            node.find('span.glyphicon-eye-close').hide();
            node.find('span.glyphicon-eye-open').show();
        } else {
            node.find('span.glyphicon-eye-close').show();
            node.find('span.glyphicon-eye-open').hide();
        }
    });
});

