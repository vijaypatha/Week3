//Problem1 ... Write a JavaScript program that accept two integers and display the larger.
//function largerNum(a,b) {
//    if (a > b) {
//        console.log(a);
//    } else {
//        console.log(b);
//    }
//}
//largerNum(2222,333);

//Problem2 ... Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor
//Sample numbers : 3, -7, 2
//Output : The sign is -
//function productNum(a,b,c) {
//    var result = a * b * c;
//    if (result < 0) {
//        console.log("-");
//    } else {
//        console.log("+");
//    }
//}
//productNum(2,-100,3);

//Problem 3...Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1
//***********************
//var a = 4;
//var b = 8;
//var c = -1;
//if (a > b && a > c) {
//    if (b > c) {
//        console.log(a,b,c);
//    }
//} else if (b > a && b > c) {
//    if(a > c) {
//        console.log(b,a,c)
//    } else {
//        console.log(b,c,a);
//    }
//}

//problem 4
//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//function defineEven() {
//    for(var i = 0; i <= 15; i++) {
//        if (i % 2 === 0) {
//            console.log(i + " is even");
//        } else {
//            console.log(i + " is odd");
//        }
//    }
//}
//defineEven();

////Problem 5
//. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
//for(var i = 1; i <= 100; i++) {
//    if (i % 3 === 0 && i % 5 === 0) {
//        console.log("fizz buzz");
//    } if (i % 3 === 0) {
//        console.log("fizz");
//    } if (i % 5 === 0) {
//        console.log("fizz");
//    }
//    else {
//        console.log(i);
//    }
//}

//Problem 6 Stars
//function rats(){
//    for (var i = "*"; i.length < 16; i += "*") {
//        //var star = "*";
//        //star = star + "*";
//        console.log(i);
//    }
//
//}
//rats();

//Problem 7 Write a JavaScript program to sum the multiples of 3 and 5 under 1000

//function multiples(){
//    var mul3Sum = 0;
//    var mul5Sum = 0;
//    for (var i = 1; i < 1000; i++) {
//        if (i % 3 === 0) {
//            mul3Sum = mul3Sum + i;
//        } else if (i % 5 === 0){
//            mul5Sum = mul5Sum + i;
//        }
//    }
//    console.log(mul3Sum + mul5Sum);
//}
//multiples();

//data type or value is numbers
//inputs are number === output
//effect produce list of mutiples of 3 and 5
//effect and then add the two lists

//function rats() {
//    var a = 0;
//    for (var i = 1; i < 1000; i++) {
//        if(i % 5 === 0 || i % 3 === 0) {
//            a = a + i; //a += i
//        }
//    }
//    console.log(a);
//}
//rats();



















