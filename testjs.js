
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

var dodaj = document.getElementById("btn");
var posli = document.getElementById("btnS");

$(dodaj).keypress(function(event){
    if(event.which === 13){
    var noveLi = $(this).val();
    $("ul").append("<li>" + "<span>" + "<i class='fa fa-trash-o'></i> " + "</span>" + noveLi + "</li>");
    $(this).val("")
    }
});


$(posli).click(function(ev){
    var noveLi2 = $(dodaj).val();
    $("ul").append("<li>" + "<span>" + "<i class='fa fa-trash-o'></i> " + "</span>" + noveLi2 + "</li>");
    $(dodaj).val("");
}); // add file