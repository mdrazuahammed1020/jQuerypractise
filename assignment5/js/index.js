
$("div.preview a").css({
    "color": "white",
    "background": "coral",
    "display": "inline-block",
    "padding": "10px 20px",
    "margin": "20px 0"
});

$("div.clearfix > a").on("click", function() {
    $(this).css({
        "color": "red"
    });
});

$("ul ~ p").css({
    "border": "2px solid red",
    "color": "green"
});

$("h2 + div").css({
    "border": "2px solid black"
});

$("#state_prev li, div#long_elem > p").css({
    "background": "orange",
    "padding": "10px 20px",
    "margin": "5px"
});

$("h2 + .pizza, div.zebra").css({
    "border": "2px solid green",
    "padding": "20px"
});

$("ul[class] li:nth-child(3").on("click", function() {
    $(this).css({
        "border": "2px solid red",
        "background": "green"
    });
});

$("ul.steps li:first").css({
    "border": "2px solid green",
    "padding": "20px"
});

$("ul#steps li:first, ul#nested_steps li:first").css({
    "border": "2px solid black"
});