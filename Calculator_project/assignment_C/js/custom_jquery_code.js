
$("button").on("click", function(){
    

    const quantData = parseInt($("#quant_1").val());
    const rateData = parseInt($("#rate_1").val());

    $("#amount_1").val(quantData * rateData);

    $("#output").text(
        `Amount charged for the quanity of ${quantData} is $${quantData * rateData}`
    );

    $("#amount_1").removeAttr("id");

});

$(".txtbox").on("click", () => {
    $("#amount_1").attr("id", "amount_1");
});
