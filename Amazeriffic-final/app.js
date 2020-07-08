var main = function () {
    "use strict";

    //List of things to show on the DOM
    var toDos = [
        "Finish Writing this book",
        "Finish the feedback of trainees",
        "Answer emails",
        "Take Mia to the park",
        "Kill a dog (with love)"
    ];

    //Cicle thru the tabs
    $(".tabs span").toArray().forEach(function (element) {
        $(element).on("click", function () {
            var $element = $(element),
                $content;
            //Change active tab collor
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            //Select first tab
            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                toDos.forEach(function (toDos) {
                    $content.append($("<li>").text(toDos));
                });
                $("main .content").append($content);
            } 
            
            else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (toDos) {
                    $content.append($("<li>").text(toDos));
                })
                $("main .content").append($content);

            } 
            
            else if ($element.parent().is(":nth-child(3)")) {
                console.log("parent 3");
            }

            return false;
        });
    });
}

$(document).ready(main);