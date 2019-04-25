"use strict";


$("#show").click(function () {
    $("dd").toggleClass("invisible")
        .css("text-align", "center");
});

$("dt").click(function () {
    $(this).css("background-color", "yellow")
});

$("dt").dblclick(function () {
    $(this).css("background-color", "white")
});

$("#lastList").click(function () {
    $("ul").each(function () {
        $(this).children().last().css("background-color", "yellow");
    });
});

$("h3").click(function (e) {
    console.log($(e.target));
    $(this).next().css("font-weight", "bold").slideToggle();
});

$("li").click(function (e){
    console.log($(e.target));
    $(this).parent().children().first().css("color", "blue");
});

// // toggles last li when you click on any li of that ul
// $("li").click(function (e){
//     console.log($(e.target));
//     $(e.target).parent().children().last().toggle();
// });

$("span").click(function(){
    $(".hideDiv").hide();
});

// $("h3").click(function () {
//     $(this).next().slideToggle().css("display", "visible");
// });

$("h2").delay(8000).fadeIn();