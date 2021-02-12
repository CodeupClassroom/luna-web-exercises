"use strict";
 $(document).ready(function() {

     /** jQuery Intro Exercise */

     // alert("Page loading complete");

     /** jQuery Selectors */

     // alert($("#first-heading").html());

     // alert(document.getElementById("first-heading").innerHTML);

     // alert($("#second-heading").html());

     // $(".codeup").css("border", "1px solid red");

     $("li").css("font-size", "20px");

     $("h1").css("background-color", "#ef0");
     $("p").css("background-color", "palevioletred");
     $("li").css("background-color", "skyblue");

     $("h1").each(function () {
         alert($("h1").html());
     });

     $("h1, p, li").css({"background-color": "darkred", "border": "solid 1px gold", "color": "white"});
 });