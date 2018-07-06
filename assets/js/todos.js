$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
if(event.which === 13) {
    //grabbing new todoText from input
    var todoText = $(this).val();
    //create a new li add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
}
});

$(".plus").click(function(){
    $("input[type='text']").fadeToggle();
});
