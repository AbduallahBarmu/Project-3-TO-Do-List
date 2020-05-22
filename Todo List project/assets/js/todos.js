// check off specific todo by  clicking
$("ul").on("click","li",function(){  // whene add new li inside ul run the function
  $(this).toggleClass("completed");

});

// click on x to delete to-do
 //$("span").click(function(event){
 $("ul").on("click","span",function(event){
   $(this).parent().fadeOut(500,function(){ // by using "parant" to delete span inside li
     $(this).remove();
   });
   event.stopPropagation(); // to sotp another events or functions working in in the same line
});

 $("input[type='text']").keypress(function(event){
 if(event.which === 13){
// grabbing new todo text from input
var text = $(this).val();
// creat new <li> and added to <ul>
$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + text + "</li>")
 }

});

$('.fa-plus-square').click(function(){
 $("input[type='text']").fadeToggle();

});

/*
$("li").click(function(){
  $(this).toggleClass("completed");

 if($(this).css("color") === "rgb(128,128,128)"){
   $(this).css({
     color:"black",
     textDecoration: "none"
   });
 }
 else {
     $(this).css({
       color:"gray",
       textDecoration: "line-through"
     });
  }
  */
