'use strict';

console.log('\'Allo \'Allo! Popup');

$(document).ready(function(){
    $("#foo_button").click(function() {
        var curNode = $(this);
        if (curNode.text() == "foo") {
            curNode.text("bar");
        } else {
            curNode.text("foo");
        }
    });
});

