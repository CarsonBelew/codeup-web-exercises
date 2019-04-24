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
        $(this).find("li").eq(3).css("background-color", "yellow");
    });
});

$("h3").click(function(){
    $("ul").next().css("font-weight", "bold");
});