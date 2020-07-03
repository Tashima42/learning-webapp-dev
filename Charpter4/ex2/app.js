var main = function (){
    $(".comment-input button").on("click", function(event){
        var $new_comment = $("<p>");
        var $input_comment = $(".comment-input input").val();
        
        $new_comment.text($input_comment);
        $(".comments").append($new_comment);
        
        $(".comment-input input").val("");
    });
};
$(document).ready(main);