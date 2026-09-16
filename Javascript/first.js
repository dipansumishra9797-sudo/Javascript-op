// conditional statements
/*let num = 5;

if(num%2 === 0) {
    console.log(num + " is an even number.");
} 
else {
    console.log(num + " is an odd number.");
}

let age = 69;

if(age <= 18) {
    console.log("Young");
}
else if (age > 60) {
    console.log("Old");
}
else {
    console.log("Adult");
}

let day = "monday";
let result = day === "sunday" ? "holiday" : "not a holiday";
console.log(result);

let name = prompt("Enter your name:");
  console.log("hello" , name);

let number = prompt("Enter a number");
  if(number % 5 === 0) {
    console.log( number ,"is multiple of 5");
}
  else{
    console.log( number ,"is not multiple of 5");
}

let score = prompt("Enter your score:");

if (score >= 90) {
    grade = "A";
}
else if(70 <= score && score < 89) {
    grade = "B";
}
else if (60 <= score && score < 69){
    grade = "C";
}
else if (50 <= score && score < 59){
    grade = "D";
}
else{
    grade = "F";
}

console.log("your grade is" ,grade);

// for loop
for (let i = 1; i <= 10; i++) {
    console.log("Dipansu Mishra");
}

let sum = 1;
for( let i = 0; i <= 5; i++){
    sum = sum + i;
}
console.log( "sum =" , sum);

//while loop
let i = 1;
while(i<=5){
    console.log("i =",i)
    i++
}

//for - of - loop (string & arrays)
let str = "Dipansu Mishra";
let size = 0;
for( let n of str){ //n is also known as iterator 
        console.log("n =",n);
        size++;
}  
console.log("Size of string =",size);

//practice questions for loops

// print all even numbers from 0 to 100
//method 1
for( let num = 0; num <= 100; num = num+2 ){
    console.log("number =",num ,"is even");
}

// method 2(loop + conditional)
for(let num = 0; num <= 100; num++ ){
    if(num%2 === 0){
        console.log("number =", num,"is an even number");
    }
}

// game 
let gameNum = 67;
let userNum = prompt("Guess the Game Number between 0 10 100");
while(userNum != gameNum){ 
    userNum = prompt("You entered wrong number. Guess again");
}
console.log("Congratulations, you entered the right number")

//strings
let str = "Dipansu Mishra";
//str.length (to get the length of th string)
//str[4] (to get at that num which string is present)

//template literals

//old method to print 
let obj = {
    item : "pen",
    price : 10,
};
console.log("price of", obj.item, "is", obj.price, "rupees");

//template method(we have to type a long console command)
let obj = {
    item: "pen",
    price:20,
}
 output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

 //Escape character(to break line)
 console.log("Dipansu Mishra");
 console.log("Dipansu\nMishra");

//string method
let str1 = "Dipansu";
let str2 = "  Mishra";
//method 1
console.log(str1.concat(str2));
//method 2
console.log(str1+str2);

//replacement in strings
let str = "hello";
console.log(str.replace("lo","p"));  //only one value gets changed

let str ="hellololo "
console.log(str.replaceAll("lo","p"));
console.log(str[4]); //to find character at a number
console.log(str.charAt(4));//method 2 

//practice question
 fullName = prompt("Enter your Full Name with out space");
output = `@${fullName}${fullName.length}`;
console.log(output);*/