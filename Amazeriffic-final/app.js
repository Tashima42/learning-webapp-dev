var main = function () {
    "use strict";

    var toDos = [
        "Finish Writing this book",
        "Finish the feedback of trainees",
        "Answer emails",
        "Take Mia to the park",
        "Kill a dog (with love)"
    ];

    $(".tabs span").toArray().forEach(function (element) {
        $(element).on("click", function () {
            var $element = $(element),
                $content;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                console.log("parent 1");
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (toDos) {
                    $content.append($("<li>").text(toDos));
                })
                $("main .content").append($content);

            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("parent 3");
            }

            return false;
        });
    });
}

$(document).ready(main);