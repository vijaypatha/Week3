//var petsFarm = [];
//petsFarm[0] = "dog";
//petsFarm[1] = "cows";
//petsFarm[2] = "hens";
//petsFarm[3] = "horse";
//petsFarm[4] = "turkeys";

//petsFarm.push("dogs","cats","rats","cows","hens");
//console.log (petsFarm);
//
//petsFarm[5] = "fish pond";
//console.log(petsFarm);
//petsFarm[6] = "pigs";
//console.log (petsFarm);
//petsFarm.push("no cats", "means rats");
//console.log(petsFarm);
//var rats = petsFarm.pop(); // can remove only one at the end
//console.log(rats);
//petsFarm.unshift("donkey1");
//console.log(petsFarm);
//petsFarm.unshift("donkey2");
//console.log(petsFarm);
//petsFarm.shift();
//console.log(petsFarm);
//
//petsFarm.splice(2, 2, "pig", "duck", "emu");//at position 2, takeout 2 variables, and insert these three)
//console.log(petsFarm);

//petsFarm.splice(0, 2, "pig", "duck", "emu");
//console.log(petsFarm);
//
//petsFarm.slice(0,5); NOT SO CLEAR************
//console.log(petsFarm);

//var email = "Hello, Welcome to BYU";
//var subject = email.slice(0,7); //start at index 0 and stop before index 7
//console.log(subject);

//var pets = ["dogs", "cats", "rats"];
//var noPets = pets.slice(1,3);
//console.log(noPets);
//var pets = ("dogxxxs");
//var noPets = pets.charAt(3);
//console.log(noPets);

//problem 1 Write a JavaScript function to check whether an `input` is an array or not.

//Problem 2 Clone an Array

//var myArray = [1,2,3,4];
//var cloneMyArray = myArray.slice(0,4);
//console.log(cloneMyArray);

//Problem 3 Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

//function getFirst(n,m){
//    console.log(n[0]);
//}
//getFirst([[7, 9, 0, -2],3]);

//Problme 4 Write a simple JavaScript program to join all elements of the following array into a string

//myColor = ["Red", "Green", "White", "Black"];
//console.log(myColor.toString());
//console.log(myColor.join("%"));
//console.log(myColor.join("*"));

//Problem 5  Write a JavaScript program which accept a number as input and //function

//insert dashes (-) between each two even numbers. - If statements

//For example if you accept 025468 the output should be 0-254-6-8.
//var num=window.prompt();
//var str = num.toString();
//var result = [str[0]];
//
//for(var x=1; x<str.length; x++)
//{
//    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//    {
//        result.push('-', str[x]);
//    }
//    else
//    {
//        result.push(str[x]);
//    }
//}
//console.log(result.join(''));

function question5() {
    var input = prompt("enter a number");
    var str = input.toString();
    var resultArray = [str[0]];

    for (var i = 0; i < str.length; i++) {
        resultArray.push("#",str[i])
    }
    console.log (resultArray);

}
question5();






















