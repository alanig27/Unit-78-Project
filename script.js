//add image of both stones 
//use .val and .append
//inputa=age
//inputb=power
let ReturnResponse;

$(".submit").click(function() {
    let age = $(".age").val();
    let power = $(".power").val();
    console.log(age);
    console.log(power);
    $(".results").append("<h1>You're " + age + " years old and you'd enjoy controlling the " + power + " stone." + " </h1>");

    if (age > -15 && power === "Time") {
        $(".kidtime").show();
    } else if (age < 15 && power-- - "Time") {
        $(".time").show();
    } else if (age > -15 && power === "Mind") {
        $(".kidmind").show();
    } else if (age < 15 && power-- - "Mind") {
        $(".mind").show();
    }

});

$(".reset").click(function() {
    $("img").hide();
    let age = "";
    let power = "";
	$(".results").html("");
});