(function(){
    "use strict";

    // while loop
    // var i = 1;
    // while (i <= 100) {
    //     if (i % 2 === 0){
    //         console.log(i);
    //     }
    //     i++;
    // }
    //
    // function squareReturn(a) {
    //     return a * a;
    // }
    //
    // while (i < 11){
    //     console.log(squareReturn(i));
    //     i++;
    // }


    // do while loop
    // var i = 1;
    // do {
    //     console.log("The number is: " + i + "!");
    //     i++;
    // } while (i <= 25);

    // var a = 100;
    // do {
    //     console.log(a);
    //     a -= 10;
    // } while (a >= -50);


    // for loop
// ****************************************************************
    // instructor demo
    // for (var i = 10; i >= 0; i -= 2){
    //     console.log(i);
    // }
    // for(var i = 1; i <=10; i++){
    //     for (var j = 1; j <=10; j++){
    //         console.log(j * i);
    //     }
    // }
// ****************************************************************

    // fizzbuzz
    for(var i = 1; i <= 100; i++) {
        if (i % 15 == 0) console.log("Fizzbuzz");
        else if(i % 5 == 0) console.log("Buzz");
        else if(i % 3 == 0) console.log("Fizz");
        else console.log(i);
    }

})();