(function(){
    "use strict";

  var userInput = prompt("Please input an odd number between 1 and 50");
  var odd = i % 2 !==0;
  console.log("Number to skip is: " + userInput);

  for (var i = 1; i <= 50; i++){

        if (userInput % 2 == 0) {
            console.log("This number is not odd... please try again");
            break;
        } else if (userInput % 2 !==0){
            console.log("Here is an odd number: " + i + odd);
        }
            console.log("Yikes! Skipping number: " + userInput);



    }




})();






