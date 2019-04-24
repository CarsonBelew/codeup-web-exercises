"use strict";


$("#show").click(function () {
    // $("dd").css("visibility", "visible");
    $("dd").toggleClass("invisible")
        .css("text-align", "center");
});

$("dt").click(function () {
    $(this).css("background-color", "yellow")
});

$("dt").dblclick(function () {
    $(this).css("background-color", "white")
});