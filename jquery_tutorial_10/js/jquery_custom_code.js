
// $(document).ready(function(){
  

// });

$(function(){

    // $("li").css("color", "blue");

    // $("#steps li").css("color", "blue");
    $("steps > li").css("color", "blue");
    $("#steps > li:first, #nested_steps > li:first").css("color", "red");
    $("#steps li:nth-child(3)").css({
     "border": "2px solid red"  
    });

    $("p[class]").css("border", "2px solid green");

    $("ul[id='steps']").hide();
    // $("#steps li:first").css("color", "red");
    // $("#steps li:last").css("color", "red");

});