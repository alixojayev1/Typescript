"use strict";
//TypeScriptda malumot turlari
// 1 Number
// let a = 12;
// a = "str";
// a= true ;
// a = {};
// a = 12 + 12;
// let a:number = 12;
// let a: number;
// a=12;
// 2 String
// let b = "ali"
// b = 12;
// b = true;
// b = "string"
//  let b:string = "xoja";
// 3 Boolen
// let c : boolean = true
// c = 12;
// c= function() {}
// 4 Null
// let d:null = null;   true
// d= undefined;  Error
//5 Undefined
// let e : undefined = undefined;
// let f: object = {}
// f = {name:"ali"};
// f = 12
// f.
// let f :{name:string} = {name:'xoja'};
// f.name = "ali"
//  let g :any ;
//  g = 12 ;
//  g = "ali";
//  g = true;
//  g = {name:'xoja'};
//  g = function (){};
//  g = [];
//  g = null;
//  g = undefined;
// Functions
// function myTS( x:number , y:number) : number {
//     return x ** y;
// }
// console.log(myTS(2,3));
// const user = (x: number, y: number): number => x + y; //arrow functions
// console.log(user(5, 5));
// function myVoid(x:number):void{  // void 
//     console.log(x); 
// }
//  function myUser(x:string):never{
//     throw new Error("error");
//  }
// signature function 
// let c :(x:number , b:string) => string;
// c = function(a:number , b:number):number{
//     return a + b                                 // error 
// }
// c = function (a: number , b:string): string{
//       return `${b}: ${a} `                        // true 
// }
// console.log(c(15 , "Iphone"));
// functions overloads 
// function myUser(x:number, y:number):number;
// function myUser(x:string, y:number):string;
// function myUser(x:any, y:any) :any{
//     if(typeof x === "number" && typeof y === "number"){
//         return x * y
//     }else{
//         return `${x}:${y}`
//     }
// }
// console.log(myUser(5,5));
// console.log(myUser("BMW",7));
// Typescript tiplarni o'zgartirish va birlashtirish 
//unknown 
let a = 20.1234;
// let b : number = <number>a
// let b: number = a as number
// console.log(b);
console.log(a.toFixed(2));
//# sourceMappingURL=index.js.map