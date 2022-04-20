// JAVA SCRIPT 

// Chapater NO 21 to 25

//////////////////////

// Question No 1

// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name")

// var fullName = firstName+" "+lastName;

// document.write(fullName);

///////////////////////////

// Question No 2

// var userInput = prompt("what is your favorite mobile phone model","Type Here");
 
// document.write("My favorite phone is : "+userInput);

// var userLength = userInput.length;

// document.write("<br /> Lenght of the string  is : "+userLength);


//////////////////////

// Question No 3

// var indexof = "Pakistani";

// document.write("String : "+indexof);

// var find = indexof.indexOf("n");

// document.write("<br /> Index of 'n' : "+find);

//////////////////

// Question No 4

// var lastIndex = "Hello World";

// document.write("String is : "+lastIndex);

// var findIndex = lastIndex.lastIndexOf("l");

// document.write("<br /> last Index of 'l' is  : "+findIndex);

/////////////////////////////

// Question No 5

// var string = "Pakistan";

// document.write("String is : "+string);

// var find = string.charAt(3);

// document.write("<br /> Character at index number 3 : "+find);

/////////////////////

// Question no 6


// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name")

// var fullName = firstName.concat(" "+lastName);

// document.write(fullName);

//////////

// Question No 7

// var city = "Hyderabad";

// document.write("city : "+city);

// var replace = city.replace("Hyderabad","Islamabad");

// document.write("<br /> After replace : "+replace);

// Quetion No 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// document.write("With out changes : "+message+"<br />");

// var change = message.replace(/and/g,"&");

// document.write("After changes : "+change);

///////////////////////

// Question No 9


// var num = "472";
// document.write("value : "+num+"<br />");
// document.write("Type : "+typeof num+"<br />");

// var change = Number(num);
// document.write("value : "+num+"<br />");
// document.write("Type : "+typeof change);

//////////////////////////////////

// Question No 10

// var userInput = prompt("Enter the word");
// document.write("User Input : "+userInput);

// var userChange = userInput.toUpperCase();
// document.write("<br /> Upper Case : "+userChange);

////////////////////////

// Question NO 11 

// var userInput = prompt("Enter the Word");

// var convert = userInput[0].toUpperCase()+userInput.slice(1).toLocaleLowerCase();
// document.write(convert);

///////////// 

// Question NO 12

// var num = 39.36;
// document.write("value : "+num+"<br />");
// document.write("Type : "+typeof num);

// var change =   num.toString().replace(".","");
// document.write("<br />value : "+change);
// document.write(" <br />Type : "+typeof change);

///////////////////////

// Question No 13


// var user = prompt("Enter the user name \nDon't enter special character [@!,.]");
// var array = [33,44,46,64];
// var flag = false;

// for(var i = 0 ; i < user.length ; i++){
//     for(var j = 0 ; j < array.length ; j++){
//          if(user.charAt(i).charCodeAt() == array[j]){
//           alert("Please Enter the valid user name");
//           flag = true;  
//           break
//          }
//     }
// }
// if(flag == false){
//    alert("valid user name")
// }

//////////////////////////

//// Question No 14

// var food = ["cake","apple pie","cookie","chips","patties"];
// var find = prompt("Enter the product Name").toLowerCase();
// ////Flag

// var Flag = false;

// for(var i = 0 ; i < food.length; i++){
//     if (food[i] == find){
//         document.write(find+" is <strong> available </strong> in Index no "+i);
//       Flag = true;
//     }
// }

// if(Flag == false){
//     document.write("We are sorry"+find+" is <strong> not available </strong> in a bakery")
// }

//////////////////// 

// Question No 15




/////////////////////////////////

// Question No 16

// var university = "University of karachi";
// var split = university.split("");

// for(var i = 0 ; i < split.length; i++){
//     document.write(split[i]+"<br />")
// }

///////////////////////////////


// Question No 17


// var user = prompt("Enter the Word");

// document.write("User Input : "+user);

// var last = user.charAt(user.length-1);

// document.write("<br /> Last Character of the Input : "+last);



//////////////////////////

// Question No 18

// var text =  "The quick brown fox jumps over the lazy dog.";
// var num = 0;

// for(var i = 0 ; i < text.length ; i++){
//     if(text.slice(i ,i+3).toLowerCase() === "the"){
//         num++
//     }
// }

// console.log(num)



var user = prompt("Enter the password \nContain on Alphbet and number \nAt least 6 Character \nDon't Start with Number");
var Flag = false;

if(user.length >= 6){
    for(var i = 0 ; i <= 10 ; i++){
        if(i == user.charAt(0)){
        document.write("please can't begin with a number <br />");
       document.write("Enter a valid password");
       Flag = true;
        break
    } 
}
}else if(user.length < 6){
    document.write("Minimum 6 charachter required for password");
    Flag = true;
}
if(Flag == false){
    document.write("valid password")
}

