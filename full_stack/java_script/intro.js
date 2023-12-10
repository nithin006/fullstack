// //

// 7;
// 5;
// number values

// ("name");
// ('name');
// string values

// true;
// false;
// boolean values

// null;
// undefined;
// empty values   --they have no values

// above values are called as premitive values
// premitive data types(number, string, boolean, null, undefined)
// premitive datatypes have only one value

// ARRAY and OBJECT

// [1,2,3,4,5,6,7,8]  // when ever you see [] it is a array
// we can have any data type in array of JS
// [1, 'anna', true, 'anurag']

// OBJECT {}

// syntax: {key:value}

// {fname:nihtin, school:LFHS}

// array and object are non Premitive datatype ==> have more then one value

// VARIABLES ==> place holder for value

// three ways to declare a variable : var, let, const

// var y = 25; // never use var
// let x = 24; // we use let for the changing value ex: money in bank account
// const z = "Anurag"; // we use const when the variable is constant ex:bank account

// // hint : never use var. use let,const

// let fname = "nithin";
// let lname = "anna";
// const mobileno = 6303021293;

// console.log("my first name is",fname);
// console.log("my last name is"+lname);
// console.log("my mobile number is",mobileno);
// console.log(fname, lname, mobileno)

// TEMPLATE Literal.

// console.log(`My current first name is ${fname}`)
// console.log(`my detailes are ${fname}, ${lname}, ${mobileno}`)

// history
// basic piller of an programming language
// values
// data types
// difference between premitive and non premitive datatypes
// console.log => how to print something on terminal
// declaring variable
// template literal


// OPERATOR

// operators simply means calculations(ie.+-/*,,)


// let x = 10;  // assignment operator
// let y = 11;
// let z = x+y;  // arthametic operator (+,-,*,/,%)
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);

// comparision operator

// let abc = 10;
// let xyz = 10;
// console.log(abc > xyz);
// console.log(abc < xyz);
// console.log(abc <= xyz);

//  == or ===
// == for value and === for datatypes and values
// console.log(abc == xyz)

// let y ;
// y=20;
// console.log(y);

// const x;
// x=9876;
// console.log(x);

// DECISION or CONDITIONS

// let age = 16;
// if(age >= 18){
//     console.log("you are allowed inside the park");
// }
// else{
//     console.log("get out");
// }

// if(condition){

// }else if (condition){

// }else{
    
// }

// SWITCH CASE

// let user = "admin";
// switch (user){
//     case "admin":
//         console.log("redirect him to admin page");
//         break;
//     case "mentor":
//         console.log("redirect him to the mentor dashboard");
//         break;
//     default:
//         console.log("no permission to access")
// }

// ---NOTE--- switch case and if and else are same

// ternary operator / Ternary condition(?:)

// synatx: condition ? true : false
// if condition is true it get evaluated and if condition is false it get evaluated

// let raining = true;
// raining ? console.log("raining") : console.log("not raining")

// ARRAY

// let name = ['anurag', 'Nithin', 'pavan', 'ram', 'shiva']
// console.log(name);
// console.log(name[2]) // specified index number

// object 

// let bankaccount ={fname: "nithin", lname:"anna", mobile:6303021293, balance: 1000,};
// console.log(bankaccount);
// console.log(bankaccount.fname); // accesing key to find the value


// DATE and MATH

// const now = new Date();  // now is variable stors date module and new alocotes the space
// console.log(now);

// const anna = new Date();  
// console.log(anna.toString());

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getTime());
// console.log(now.getHours(),now.getMinutes())

// MATH

// const PI = Math.PI;
// console.log(PI);
// console.log(Math.round(PI));
// console.log(Math.floor(PI));
// console.log(Math.ceil(PI));

// min and max
// console.log(Math.min(10,2,3,12,4,5));
// console.log(Math.max(10,12,2,3,24,5,6));

// Random

// console.log(Math.random());
// console.log(Math.round(Math.random()*10));

// console.log(Math.pow(3,2));
// console.log(Math.log(2));
// console.log(Math.sin(90));

// LOOPS
// 5 loops 

// do while
// while
// for

// DO WHILE // in this the programme atleast repeat once

// let i = 6;
// do {
//     console.log("value of i is: ", i);
//     i++;
// } while (i<=5);

// while (i<=5){
//     console.log(i)
// }

// FOR LOOP

// for (let i=0; i<=5; i++){
//     console.log("printing",i)
// }

// ARRAY in depth  and for of loop

// let names = ['hitesh', 'anurag', 'nithin', 'ineuron'];
// console.log(names);
// console.log(names.length);  // to find the length of arrray
// console.log(names[3]);
// console.log(names[names.length-1]);
// names[3]="pavan";
// console.log(names)

// push

// names.push("anna");
// console.log(names);

// SLICE  --slice takes two parameters
// slice means to cut some thing

// console.log(names.slice(1,3));  //end(3) is not included
// console.log(names.slice(1,6));
// console.log(names.length);

// SPLICE  -- to insert value inside array

// let fruit = ["apple", 'banana', 'cova', 'double apple'];
// fruit.splice(2, 0, "karab apple", "acha apple" );  // observe 2,0
// start inserting from index 2 remove 0
// console.log(fruit);
// fruit.splice(2, 1, "karab apple", "acha apple" );
// strt inserting from 2 index and remove 1 existing value
// console.log(fruit)

// let a = ["a", "b", "c", 'd'];
// a.splice(1,1,"ni",'th');
// console.log(a);

// let b = ["a", "b", "c", 'd'];
// b.splice(1,2,"ni",'th');
// console.log(b);

// let c = ["a", "b", "c", 'd'];
// c.splice(1,0,"ni",'th');
// console.log(c);

// CONCATENATION

// let a = [1,2,3,4,5,6];
// let b = [4,6,7,8];
// let c = [0,8,9,2];

// console.log(a.concat(b));
// console.log(a.concat(b,c));

// FILL => Homework

// let arr4 = [1,2,3,4,5,6,7,8];
// arr4.fill("anurag", 2,4);
// console.log(arr4);

// include  => it is used to check wether the value in list or not

// let num = [1,2,3,4,5,6,7,8,9];
// console.log(num.includes(7));
 
// INDEXOF

// let num =[3,4,5,6,1,"anna"];
// console.log(num.indexOf("anna"));

// ISARRAY()

// let n = [1,2,3,4,5,6,"anna",10,"man"]
// console.log(Array.isArray(n))

// JOIN

// let arr1 = [1,2,3,4,5,6,7];
// console.log(arr1.join());
// console.log(arr1.join(" "))
// console.log(arr1.join(" and "));
// console.log(typeof(arr1))

// lastindeof  // to find last index of repited element element

// let num = [1,2,3,4,"nithin",3,6,7,"nithin",8];
// console.log(num.lastIndexOf("nithin"));
// console.log(num.indexOf("nithin"));

// ****MAP****  ==> mao is used to work with each value of array

// let ma = [1,4,6,2,7];
// console.log(ma.map(Math.sqrt));

// POP

// let ma = [2,4,3,5,6,78,9];
// console.log(ma.pop());
// console.log(ma);

// REVERSE 

// let n = [1,4,3,2];
// console.log(n.reverse());

//  SHIFT()  ==> shift is reverse of pop :)

// let i = [1,12,14,16];
// console.log(i.shift());

// SORT   ==> arrange list in assending order

// let som = [1,5,2,3,"a",8,"anna"];
// console.log(som.sort())

// UNSHIFT

// let fruit = ["apple", "bada apple", "pine apple"];
// fruit.unshift("grapes", "orange");
// console.log(fruit);

// Converting string to array

// let name = "annanithin";
// let arraay1 = name.split("");
// console.log(arraay1);

// *** for of ***

// let fruit = ["apple", 'banana', 'pineapple']
// let upperfruit = []
// for (const i of fruit){
//     upperfruit.push(i.toUpperCase());
// }
// console.log(upperfruit);

// let n = [1,2,3,4,5,6,7,8,9];
// let s = [];
// for (const i of n){
//     s.push(i*2);
// }
// console.log(s);

// BREAK AND CONTINUE

// for (let i=0; i<=5; i++){
//     if(i==3){
//         break;              // stops at this condition
//     }
//     console.log(i)
// }

//   CONTINUE

// for (let i=1; i<=6; i++){
//     if (i==4){
//         continue;              // skip this step
//     }
//     console.log(i);
// }

// HOME WORK all Array methods in JAVASCRIPT

// Datatypes => number,string boolean, null and undefined (array,object)
// Operators => 
// Conditions =>if, if else, switch and ternary
// Loops => do while, while, for
// Math and Date
// Array and Method
// for of => array and for in =>object

// Topic : FUNCTION
// what was the use of the function 
// syntax : function name(){.....}

// normal function
// function sum(){
//     let num1 = 3;
//     let num2 = 4;
//     console.log("the  sum of nums is", num1+num2);
// }
// console.log(sum());

// function with arguments or parameters
// function add(v1,v2){                  // v1 and v2 are arguments or parameters
//     console.log("sum is ", v1+v2);
// }
// console.log(add(2,4));
// console.log(add(4,5));
// console.log(add(5,6));

// function with return type

// function sum(v1, v2){
//     let result = v1+v2;
//     return result;
// }
// console.log(sum(19,14));

// create a calculator app  :)

// STRING

// function url(url, domain){
//     let con = "https://";
//     let result = con +url +domain;
//     return result;
// }
// let anuragsite = url("anuragtiwari", ".me");
// console.log(anuragsite);

// function with n parameters

// function sum(arr){
//     let sm=0;
//     for (let i of arr){
//         sm=sm+i;
//         i++;
//     }
//     return sm;
// }

// function sum(arr){
//     sm=0;
//     for (let i=0; i<arr.length; i++ ){
//         sm = sm+arr[i];
//     }
//     return sm;
// }
// let s = [1,23,4,5,6,7,8];
// console.log(sum(s));

// function anna(){
//     // argumrnts space is atomatically created in the function by default
//     let sum = 0;
//     for (let i = 0; i<arguments.length; i++){
//         sum = sum + arguments[i];
//     }
//     return sum;
// }
// console.log(anna(1,2,3,4,5,6,7,8,9));

// the world is beautiful we are making it difficult

// ***   ARROW FUNCTION   ***
// syntax : let functionname = (arguments) =>{}

// let anna = (val1,val2) =>{
//     console.log(val1,val2);
// }
// console.log(anna(12,13));
// anna(10,1);

// *** OBJECT and it's METHODS ***

// let userName = {
//     fname : "nihtin",
//     lname : "anna",
//     role : "admin",
//     logincount : 23,
// };
// console.log(userName);
// console.log(userName.role);
// console.log(userName.fname);
// userName.logincount = 34;
// console.log(userName.logincount);

// FOR IN       => for in loops is used for object

// for (let x in userName){
//     console.log(x);
// }

// *** OBJECT ***
// every thing is object in JAVASCRIPT

// const object = {
//     rocket : "vikram",
//     home : "nithin"
// }

// for (k in object){
//     console.log(k)
// }


// object inside a boject and some operations on object
// const obj1 ={
//     rocket: "elon musk",
//     fuel : 200,
//     config:{
//         name: "mars"
//     }
// }
// obj1.fuel = 150
// obj1["year"] = 2024
// console.log(obj1)

// part 2

// const obj2 = new Object() // constructor
// obj2.readbook = "apj"
// obj2.myvalue = "it's good"
// console.log(obj2)

// part 3

// const powers = {
//     fly : true,
//     cordinate : Math.random() +2
// }
// const obj3 = Object.create(powers)
// console.log(obj3);
// console.log(obj3.cordinate);

// part4

// const obj4 = Object.create({})
// Object.defineProperty(obj4, "book",{
//     // icon: "blue book"
//     get: () => "blue book",
//     enumerable: true
// })

// // console.log(obj4);
// // console.log(obj4.book);
// // console.log(Object.getPrototypeOf(obj4));

// for (k in obj4){
//     console.log("value is ",k);
// }

 // part 5

//  const obj5 ={
//     comics : "marvel",
//     pen : "",
//     printComics: function(){
//         this.pen += "srisri"
//     }
//  }
//  console.log(obj5.printComics());