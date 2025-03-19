// there are 5 data types  in typescript
// any,tuple,enum,never,unknown

// any data type
//  let age: number=20;
//  if(age<50)
//     age+=10;
// console.log(age);

// use underscore to make more readable
// let sales=8939_614_323;
// let course="typescript";
// let is_published=true ;

// // if we doesn't declare any value it  is "any"  avoid "any" data type

// // let type;
// // type=1;
// // type ='sha';

// // in this function also without specifying the data type it is must be a "any" data type  ...if you want to use use ":any" 
// function render(document :any){
//     console.log(document);
    
// }

////////////////////////////////////

// array
// let numbers=[1,2,3];
// let array: number[]=[];
// array[0]=1;
// array[1]=2;
// array[2]='5'



// let numbers: number[]=[];
// numbers.forEach(n=>n.valueOf)

////////////////////////////////////////////////

// tuples
// whatever the size we give---we cant modify it
// elements should be in  the type whatever we declared
// 


// if we use the number element ....it show all methods of number object
// user[0].valueOf

// if we use the number element ....it show all methods of string object
// user[1].charAt

////////////////////////////////////////////////////

// enums
// list of related constants
// we use Pascal case

// enum Size{Small=1 , Medium , Large};
// let mySize: Size=Size.Large
// console.log(mySize);

// const enum Size{Small=1 , Medium , Large};
// let mySize: Size=Size.Large
// console.log(mySize);

////////////////////////////////////////////////////

// functions
// if we pass any value other than a number it shows error when using ": number"
// function calculator(income: number,tax: number): number

// {
    
//   if(income<50_000){
//     return income*1.2;
//   }
//   return income*1.3;

// if(tax<20_000){
//     return income*1.2

// }return income*1.3
// }
// console.log(calculator(10_0000,2025));

// calculator(10_0000,2025)

////////////////////////////////////////////////////////

// use question mark after the variable name to make the variable optional
// use readonly keyword to make it unchangeable

// objects

// let employee: {
//     id: number,
//     name?: string
// }={id:1,name:'sk'};

// employee.id=1
// employee.name="shanmugam"


///////////////////////////////////////////////////////////////

// advanced types is typescript

// type aliases
// type Employee={
//     readonly id: number,
//      name?: string,
//      retire: (date: Date)=> void
// }

// let employee: Employee= {
//     id:1,
//     name:'sk',
//     retire:(date: Date)=>{
//         console.log(date);
//     }
// };


// union types
// we can give variable or parameter more than one type

// function kgToLbs(weight: number | string): number{
// if(typeof weight === 'number'){
//     return weight*2.2
// }else{
//     return parseInt(weight) *2.2
// }
// }

// kgToLbs(10)
// kgToLbs("12kg")


// intersection types  
 //   let weight: number & string;
// type Draggable=
// {
//     drag:()=>void
// }


// type Resizeable={
//     resize:()=>void 
// }

// type widget=Draggable & Resizeable;

// let text: widget={
//     drag: ()=>{},
//     resize: ()=>{}
// }

// literal types (exact , specific)
//  type Quantity=50 | 100
// let quantity: Quantity=100;

///////////////////////////////////////////////////////////////////////////////

// nullabale types

// function greet(name: string){
//     if(name)
//     console.log(name.toUpperCase);
// else
// console.log("Hola!");

// }

// greet()


/////////////////////////////////////////////////////////////

// optional chaining
// ?. this is the optional chaining operator

//arr=[1,2,3] dont use if else statement use ?. to get answer  arr?.[0]