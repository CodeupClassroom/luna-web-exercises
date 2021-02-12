// window.onload = function() {
//     alert("Ding fries are done!");
// }
//
// $(document).ready(function() {
//     alert("I gotta run I gotta run");
// });

// document.getElementById("ipsum").style.background = "palevioletred";

var texts = Array.from(document.getElementsByClassName("filler-text"));

texts.forEach(function (text) {
    text.style.color = "red";
});

document.getElementById("dolor").innerHTML = ";)";


$(document).ready(function () {
    $("#ipsum").css("background", "skyblue");
    $(".filler-text").css("font-family", "sans-serif");
    $("h1").html("Howdy Goobers! Let's learn about jQuery Selectors, y'all.");
    $("#lorem, #ipsum, #dolor, h1").css('font-size', '2em').css("display", "block");
    $("#flex-box, #flexier-box").css("display", "flex");
    $("*").css("display", "none");

});
