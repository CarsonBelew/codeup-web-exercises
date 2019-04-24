"use strict";

$(document).keyup(function(e){
    console.log(e.keyCode);
});

var buttons = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    13: 'enter'
};

var konamiCheats = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

var konamiCodePosition = 0;


$(document).keydown(function (e) {
    var key = buttons[e.keyCode];
    var requiredKey = konamiCheats[konamiCodePosition];

    if (key === requiredKey) {
        konamiCodePosition++;


    if (konamiCodePosition === konamiCheats.length) {
        cheater();
    }
    }else {
        konamiCodePosition = 0;
    }

});

function cheater() {
    alert("YOU HAVE CHEATED!!");
    var body = $('body');
    var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    var currentIndex = 0;
    setInterval(function () {
        body.css({
            backgroundColor: colors[currentIndex]
        });
        if (!colors[currentIndex]) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
    }, 100);
    $("h1").css("font-size", "200px");
    $("object").css("visibility", "visible");
}




