


$("h4.boot").css("color", "red");

$("h4").css({
  "color": "white",
  "background-color": "coral",
  "font-family": "arial",
  "height": "200px",
  "text-align": "center",
  "padding": "20px"
});


$("button").on("click", function() {
  $("p").addClass("beautify");
  // $("button").addClass("beautify");
  $(this).addClass("beautify");
  $(this).on("dblclick", function() {
    $(this).addClass("blue_border");
  })
});

$("p").on("click", function() {
  $(this).css({
    "color": "white",
  "background-color": "gray",
  "font-family": "arial",
  "height": "100px",
  "text-align": "center",
  "padding": "20px"
  })
})
