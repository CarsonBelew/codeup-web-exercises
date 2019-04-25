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
    $(e.target).next().css("font-weight", "bold");
});

$("li").click(function (e){
    console.log($(e.target));
    $(e.target).parent().children().first().css("color", "blue");
});