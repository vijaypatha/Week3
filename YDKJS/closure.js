//Inside the message function return the welcome text plus the firstname and the last. For example: 'Your doing awesome keep it up sally smith'

//function motivation(firstName, lastName) {
//    var welcomeText = "You\'re doing great ";
//    function message() {
//        return welcomeText + firstName + " " + lastName;
//    }
//    console.log(message());
//}
//motivation("heidi", "patha");

//Problem 2...The value of name should return personObj.name

//var outerFunction = (function() {
//    var personObj = {
//        name: "Bob",
//        age: 28,
//        gender: "male"
//    };
//
//    return {
//        name: function () {
//            // code here
//            return personObj.name; //just did this
//        }
//    }
//})();
//
//outerFunction.name();

//Problem 3 Inside the return create a name property with the value being a function that returns personObj.name

//var outerFunction = (function() {
//    var personObj = {
//        name: "Bob",
//        age: 28,
//        gender: "male"
//    };
//
//    return {
//        // Code here
//    }
//
//})();


//Problem 4
//Inside the publicMethod function return privateMethod invoked

//
//var module = (function() {
//    var person = {
//        name: "phillip",
//        age: 29,
//        location: 'Utah'
//    };
//
//    var privateMethod = function(){
//        return person.name + ' ' + person.age + ' ' + person.location
//    };
//
//
//    return {
//        publicMethod: function () {
//            // Code here
//            return privateMethod(); //just did this
//        }
//    };
//
//})();
