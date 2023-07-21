 
// $("div#apple_nav").on("click", function() {
//     $(this).hide(1000);
// });

$("div#apple_nav").on("dblclick", function() {
    $(this).fadeOut(1000);
});

$("input#itm_1").on("focus", function() {
    $(this).css({
        "background-color": "green",
        "font-size": "18pt"
    });
});

$("input#fruit_box").on("focus", function() {
    $(this).val("Apples");
});

// $("div#orange p").on("click", function() {
//     var myText = $(this).text();
//     $(this).css({"border": "2px solid red"});
// });

$("div#orange p").on("click", function() {
    var myText = $(this).removeAttr("id");
    alert(myText);
})