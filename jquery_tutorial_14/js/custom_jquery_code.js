
$(function(){
    $("#books_div > .book").on("click","button", function(event){
        let price = $(this).closest(".book").data("price");
        let author = $(this).closest(".book").data("author");
        let details = $("<p> price: " + price + "<br> Author: <b>" + author + "</b> </p>");
        // $(this).after(details);
        $(this).closest(".book").append(details);
        $(this).closest(".book").css({"background": "yellow"});
        $(this).remove();
        event.stopPropagation();
    });

    $("div.book").on("click", function() {
        alert("click on datails button.");
    });

    $("#books_completed > .book").on("click", "button", function(event) {
        let date = $(this).closest(".book").data("purchased");
        let author = $(this).closest(".book").data("author");
        let rating = $(this).closest(".book").data("myRating");
        let details = $("<p> purchased Date: " + date + "<br> Author: <b>" + author + "</b> + <br> Rating: " +"</p>");
        $(this).closest(".book").append(details);
        $(this).closest(".book").css({"background": "yellow"});
        $(this).remove();
        event.stopPropagation();
    });

});
