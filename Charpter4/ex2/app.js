//Inicia a função principal no modo estrito
var main = function () {
    "use strict";
    //Pega o valor do input e adiciona a seção de comentários
    var addCommentFromInputBox = function () {
        var $new_comment;
        //Caso o input esteja vazio, ele não faz nada
        if ($(".comment-input input").val() !== "") {
            //Atribui o que está no input a variável 
            $new_comment = $("<p>").text($(".comment-input input").val()); 
            //Esconde a variável para mostrar novamente em seguida
            $new_comment.hide();
            //Adiciona na DOM o comentário da variável
            $(".comments").append($new_comment);
            //Mostra o comentário com um efeito visual
            $new_comment.fadeIn();
            //Limpa o campo digitado
            $(".comment-input input").val("");
        }
    };

    //Chama a função que adiciona o comentário quando o botão é clicado
    $(".comment-input").on("click", function (event) {
        addCommentFromInputBox();
    });
    //Chama a função que adiciona o comentário quando a tecla enter é apertada
    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    })
}
//Roda a função main
$(document).ready(main);