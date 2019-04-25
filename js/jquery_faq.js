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

$(document).ready(function () {
    $(".alert-success").show().fadeOut(8000);
});

$(".modal").delay(8000).fadeIn().fadeOut(3000);

// // make an image of yellowstone appear on hover of yellowstone h3
// $("#yellowstone").hover(function () {
//     $(".yellowstone-img").css("display", "block");
// }, function () {
//     $(".yellowstone-img").css("display", "none")
// }
// );
//
// // make an image of zion appear on hover of zion h3
// $("#zion").hover(function () {
//         $(".zion-img").css("display", "block");
//     }, function () {
//     $(".zion-img").css("display", "none")
// }
// );
//
// // make an image of sequoia appear on hover of sequoia h3
// $("#sequoia").hover(function () {
//         $(".sequoia-img").css("display", "block");
//     }, function () {
//     $(".sequoia-img").css("display", "none")
// }
// );