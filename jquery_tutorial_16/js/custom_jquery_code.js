
// You'll need the below URLs while following along with the lecture for practice.
    // var root = "https://jsonplaceholder.typicode.com/posts/1";
    // var root = "https://jsonplaceholder.typicode.com/comments";
    // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";
    // var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html"

$(function(){
    $("button").on("click", function() {
        // let url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";

        // let url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html";

        // url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html table fieldset:first";

        // url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html fieldset:last";



        // $("p").hide(4000, function(){
        //     alert("The image has been hidden");
        // });

        // $.ajax(url, {
        //     dataType: "html",
        //     method: "GET",
        //     success: function(response) {
        //         $("div.main").html(response);
        //         // $("div.main").text(response);
        //     },
        //     error: function(requst, errorType, errorMsg) {
        //         alert("there was an issue with the ajax call: " + errorMsg);
        //     }
            
        // });

        // var root = "https://jsonplaceholder.typicode.com/posts/1";

        // $.ajax(root, {
        //     dataType: "json",
        //     method:'GET', 
        //     succsess: function(response){
        //         console.log(response);
        //         var userId = response.userId;
        //         var title = response.title;
        //         var $info = $("<p></p>");
        //         $info.text("User id is: " + userId + " title is: " + title);
        //         $("div.main").append($info);

        //     },
        //     error: function (requst, errorType, errorMsg){
        //         alert("there was an issue with tha ajax call: " + errorMsg);
        //     }
            // 
        // });

        var root = "https://jsonplaceholder.typicode.com/posts/1";

        var root = "https://jsonplaceholder.typicode.com/comments";

        $.ajax(root, {
            dataType: "json",
            method: "GET",
            success: function(response) {
                var userId = response[0].postId;
                var title = response[0].email;

                var $info = $("<p></p>");

                $info.text("user id is: " + userId + "title is: " + title);
                $("div.main").append($info);
                console.log(response);
            }, 
            error: function(r, e, errMgs) {
                alert("there was an issue with ajx call: " + errMgs)
            }, 
            data: {"postId": 1},
            // folando: function(res)
            beforSend: function() {

            },
            complete: function(  ){

            }
        });
    });
});
