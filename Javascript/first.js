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
console.log(output);

//Array in JS

//Creat arrays
let num = [94, 59, 82, 85, 93];
console.log(num);
console.log(num.length);
console.log(num[4]);//data at that point
// arr[3]=55; in array you can change the character but in string you cannot change
// print num the value of 3rd (85) will change to 55
// strings are immutable
// arrays are mutable

//loop over an aray
let hero= ["ironman", "hulk", "antman", "shaktiman", "spiderman", "krish" ];

//method 1 but is leanthy
//console.log(hero[0]);
//console.log(hero[1]); 

//loop method 

//for method
//for (let i = 0 ; i < hero.length; i++){
//   console.log(hero[i]);
//}

//for-of loop
for( let char of hero){
    console.log(char);
}

//example question
let cities = ["goa", "bhopal", "amritsar", "jammu", "rewa", "bengaluru", "delhi", "pune"];

for(let city of cities){
    console.log(city.toUpperCase());
}

let marks = [85,97,44,37,76,60];
let sum = 0;
for(let i = 0 ; i < marks.length; i++){
    sum = sum + marks[i];
}
console.log(sum);
let avg = sum/6;
console.log(avg);

let price =[250,645,300,900,50];
for( let i = 0; i < price.length;i++){
    let updated = price[i]/10;
    newprice = price[i]-updated;
    console.log(newprice);
}

//Array Method

//PUSH METHOD
let foodItems = ["potato", "apple", "litchi", "tomato"];
foodItems.push("Chips", "burger"); //to add at the end
console.log(foodItems);


//pop
let food = ["potato", "apple", "litchi", "tomato"];
food.pop();//remove last one

//to string
let food = ["potato", "apple", "litchi", "tomato"];
console.log(food);
console.log(food.toString()); // convert array to string


//concat
let marvelHero = ["ironman", "thor", "hulk"];
let dcHero = ["superman", "batman"];
let indHero = ["shaktiman", "krish"]
let hero = marvelHero.concat(dcHero,indHero);//join two arrays
console.log(hero); 

//unshift
//shift
//both are same as push and pop but the do changes in the starting

//slice
let hero = ["ironman", "thor", "hulk" ,"superman", "batman"];
let newHero = hero.slice(1,3); // will give 1 and 2 element and will not include 3
console.log(newHero); 

let num = [1,2,3,4,5,6,7];
//num.splice(2,2,101,102,103);//to delete and add characters
num.splice(3,0,101);//you can also use any one operation also 

//practice question for array methods
let companies = ["Bloomberg", "Microsoft", "Uber","Google","IBM","Netflix"];
//companies.shift() //remove first company
//companies.splice(2,1,"ola"); //remove uber and ad ola
//companies.push("amazon");//add amazon in the last*/



//code with harry javascript

// let o = {
//     //key:value;
//     is_handsome:"true",
//     name:"dipansu",
//     "job code": 5000, //two words key thats why written in the commas
// };
// console.log(o);

// o.age=19;
// o.college="mirai school of technology";

// console.log(o);

// let age = 24;
// if(age<18){
//     console.log("you cannot drive");
// }
// else{
//     console.log("you can drive");
// }


// let a=6;
// let b=9;
// let c=a>b?(a-b):(b-a);
// console.log(c);

//to change one comman thing in many lines like name

// function nice(name){
//     console.log("Hey",name,"how are you");
//     console.log("Hey",name,"What are you doing");
//     console.log("Hey",name,"are you going");
//     console.log("Hey",name,"have you had your lunch");
//     console.log("Hey",name,"you are a good boy");
// };
// nice("dipansu");
// nice("Rahul");

// function sum(a,b){
//     return a+b;
// };
// result=sum(4,5);
// console.log("sum of the integers is = ",result);

// function nice(x){
//     console.log("hey i am a number : ",x);
// }
// nice(33);
// nice(66);
// nice(35);




//practice question
/*create a faulty calculator using js
it take two numder as an input
perform wrong operations

+ == -
* == +
- == /
/ == *

it performes wrong operations 10% of the time
*/

// let random = number.random();
// let a = prompt("Enter your first number");
// let c = prompt("Enter operation");
// let b = prompt("Enter your second number");


// let obj = {
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"*",
// };

// if(random > 0.1){
//     //for correct operations
//     aleart(`the result is ${eval(`${a} ${b} ${c}`)}`)
// }
// else{
//     //for wrong operations 
//     c = obj[c]
//     aleart(`the result is ${eval(`${a} ${b} ${c}`)}`)
// }



//practice question
/* create a business name generator by compinint the list below */

// let random = Math.random();
 // let adj = "crazy amazing fire ";
 // let shop = "engine foods garments";
 // let other = "Bros Limited Hub";

// console.log(random);

//arr element square

// let arr = [3,5,7,33];
// let newarr = [];
// for(i=0;i<arr.length;i++){
//     const element= arr[i];
//     newarr.push(element**3);
// }
// console.log(newarr);

// short method for this
// map function and arrow function
// let newarr = arr.map((e)=>{
//     return e**2
// })
// console.log(newarr)

//filter function
// let arr = [3,5,7,33];
// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return true;
//     }
//     return false;
// }
// console.log(arr.filter(greaterThanSeven));//filter only prints true values

//short method 
// let arr = [3,5,7,33];
// let greaterThanSeven = (e)=> e>7;//this itself will give true or false so no need of usinf if and else
// console.log(arr.filter(greaterThanSeven))

//reduce function perform a series of operation like sum of n product of n
// let arr = [1,2,3,4,5,6];
// let ans = (a,b)=>{
//     return a+b
// }
// console.log(arr.reduce(ans)); //sum of all the elements of array

//practice question
/*write a program to calculate factorial of a number using reduce and for loop */

// let arr = [6,5,4,3,2,1];
// let product = (a,b)=>{
//     return a*b
// }
// console.log(arr.reduce(product));

// let ans = 1;
// for(i=0;i<arr.length;i++){
//     ans = ans*arr[i];
// }
// console.log(ans);

//Document object model(DOM)
// document.title = "Intro to JS";
// document.body.style.backgroundColor = "green";


// let cont = document.body.childNodes[1];
// console.log(cont);
// document.getElementById("red").style.backgroundColor = 'red'


//DOM practice question
//asign random color to the 5 boxes


//Intertion method 
// let cont = document.createElement("div");
// cont.innerHTML = "I have been created by Dipansu Mishra";
// cont.className = "created";
// document.querySelector(".container").after(cont);
// document.body.before(cont);
// document.querySelector(".container").append(cont);
// document.querySelector(".container").prepend(cont);
// let num = document.body.querySelector(".box");
// num.style.backgroundColor = 'red'


// let cont = document.querySelector(".container");
// cont.insertAdjacentHTML("afterend","Hey guys Dipansu Mishra this side" )
// let cont = document.getElementById("red");
// cont.style.backgroundColor = 'red';

//cont.classList.add("blue"); //added class ble to the box having id red;
// cont.classList.remove("box"); //remove the class box from the box of id red

//cont.classList.toggle("red");//if true make it false and i f false make it true



//Events In Jvascript
let cont = document.getElementById("red");
cont.style.backgroundColor = 'red';

let button = document.getElementById("btn");
button.addEventListener("click",()=>{
    alert("Look the message changed");
    document.querySelector(".para").innerHTML = "My name is <b>Dipansu Mishra </b>";

})
document.querySelector(".box3").addEventListener("click",()=>{
    alert("You clicked box3");
})
document.querySelector(".box2").addEventListener("click",()=>{
    alert("You clicked box2");
})
document.querySelector(".box1").addEventListener("click",()=>{
    alert("You clicked box1");
})




