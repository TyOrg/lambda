//1. print the number 5 to the console
  console.log(5);
//2. Print your name to the console
  console.log("TMD");
//3. Store your age as a variable called "myAge"
  var myAge = 52;
  console.log(myAge);
//4. Print to the console how old you will be in 5 years
  var myAgePlus5 = myAge + 5;
  console.log(myAgePlus5);
//5. Store your favorite food as a variable called "myFavoriteFood"
  var myFavoriteFood = "anything that doesnt kill me";
  console.log("I will eat " + myFavoriteFood);
//6. Publish your favorite food to `index.html` using `document.write()`
  document.write("<div>My favorite food is: <strong>" + myFavoriteFood + "</strong></div><br>");
//7. Print the remainder of 14 / 3 to the console
  x = 14/3;
  console.log("14 divided by 3 = "+~~x+", the remainder is: "+ 14%3);
//8. Print the remainder of 829 / 13 to the console
  x = 829/13;
  console.log("829 divided by 13 = "+~~x+", the remainder is: "+ 829%13);

//9. Create a for loop that counts from 0 to 130 by 3s
  var num9 = 130;
  for (i = 0; i <= num9; i+=3) {
      // text += num[i] + "<br>";
      console.log(i);
  }


//10. Create a for loop that counts from 3 to 17 by 2s
  var min10 = 3;
  var max10 = 17;
  for (i = min10; i <= max10; i+=2) {
      console.log(i);
  }

//11. Create a for loop that counts from 100 to 3 by -1
  var min11 = 3;
  var max11 = 100;
  for (i = max11; i >= min11; i--) {
     console.log(i);
  }

//12. Create a for loop that counts from 1 to 100 by 1s
  var min12 = 1;
  var max12 = 100;
  for (i = min12; i <= max12; i++) {
     console.log(i);
  }

//13. Create a for loop that counts from 1 to 100,
//but instead of printing `i` prints `fizz` if the number is divisible by 5
  var min13 = 1;
  var max13 = 100;
  for(var i = min13; i <= max13; i++) {
    if(i % 5 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }

//14. Create a for loop that counts from 1 to 100,
//but instead of printing `i` prints `buzz` if the number is divisible by 3
  var min14 = 1;
  var max14 = 100;
  for(var i = min14; i <= max14; i++) {
    if(i % 3 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }

//15. Create a for loop that counts from 1 to 100,
//but instead of printing `i` prints `fizzbuzz` if the number is divisible by 15
  var min15 = 1;
  var max15 = 100;
  for(var i = min15; i <= max15; i++) {
    if(i % 15 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log(i);
    }
  }


//EXTRA CREDIT: Fizzbuzz
  var minX = 1;
  var maxX = 100;
  for(var i = minX; i <= maxX; i++) {
  	if(i % 15 === 0) {
  	 console.log("fizzbuzz");
   } else if(i %  5 === 0) {
  	 console.log("fizz");
   } else if(i % 3 === 0) {
  	 console.log("buzz");
   } else {
      console.log(i);
    }
  }

/*

The "Fizz-Buzz test" is an interview question designed to help filter
out the 99.5% of programming job candidates who can't seem to program
their way out of a wet paper bag. The text of the programming assignment
is as follows:

"Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number and
for the multiples of five print “Buzz”. For numbers which are multiples of
both three and five print “FizzBuzz”."

Hint: Use your last three loops and if/then/else statements.
You can learn about those here https://www.w3schools.com/js/js_if_else.asp

*/

document.write("**********<br><strong>Pass FIZZBUZZ to document from an ARRAY</strong><em> [I know it wasnt asked for but it was interesting to try another way and push it to the page.] </em>");
document.write(
  Array.apply(null, {length: 100}).map(function(val, index) {
    index++;
    if (index % 15 == 0){return "<strong>FizzBuzz</strong><br>";}
    if (index % 3 == 0){return "<strong>Fizz</strong><br>";}
    if (index % 5 == 0){return "<strong>Buzz</strong><br>";}
    return index+"<br>";
  }).join('\n')
);
