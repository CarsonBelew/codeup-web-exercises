"use strict";

// $(document).ready(function() {
//     alert("The DOM has finished loading!");
//
// });

// // alerting an id
// alert($("#fav-animal").html());
//
// // alerting a second id
// alert($("#para").html());

// // selecting class
// $(".codeup").css("border", "1px solid red");

// // element and multiple selectors
// $("li").css("font-size", "20px");
//
// $("h1, li, p").css("background-color", "yellow");
//
//
// alert($("h1").html());


// *****MOUSE EVENTS*****

// change the background of a h1 when clicked
$("h1").click(function(){
    $(this).css("background", "blue");
});

// all <p> have a font-size of 18px when dbl clicked
$("p").dblclick(function(){
    $("p").css("font-size", "18px");
});

// all <li> text red when mouse hovers and resets to black when not hover
$("li").hover(function() {
    $(this).css("color", "red")
},
    function () {
        $(this).css("color", "black")
    }
);