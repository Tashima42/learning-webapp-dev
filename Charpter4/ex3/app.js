var $newUl = $("<ul>");
var $firstLi = $("<li>").text("This is the firs item");
var $secondLi = $("<li>").text("This is the second item");
var $thirdLi = $("<li>").text("This is the third item");

var $newP = $("<p>").text("Hello, i'm a paragraph");

$("main").append($newP);

$newUl.append($firstLi); 
$newUl.append($secondLi);
$newUl.append($thirdLi); 

$("footer").prepend($newUl);

$("ul li:first-child").remove();
$newUl.slideUp();
$newUl.slideDown();
$("main p").fadeOut();