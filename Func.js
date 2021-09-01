console.time("timer");

//modular
// import * as Mod from "./module1.js";

// console.log(Mod.year);
// //Mod.year = 2020;
// Mod.Year(2020);
// console.log(Mod.year);

// Mod.func1();
// Mod.func2();
// // Mod.


//variables                  
const arr = [1,5,10,20,25];
const obj = {a:1, b:2, c:3};
const x = 1;
const name = "Hessam";
const age = 20.8;

// //main command

// console.clear();
// console.log("log");
// console.error("error");
// console.warn("warning");
// console.trace(obj);

// //count()

// console.count();
// console.count();

// for(let i=0; i<5; ++i){
//     console.count(i);
//     console.count(i);
//     console.count(i);
// }

// //group()

// console.group("G1");
//     console.warn("warning");
//     console.log("log");
//     console.error("error");
// console.groupEnd("G1");

// console.log("another group");

// console.group("G2");
//     console.warn("warning");
//     console.error("error");
//     console.log("log");
// console.groupEnd("G2");

// console.log("another group that is collapsed as default");

// console.groupCollapsed("G3");
//     console.warn("warning");
//     console.error("error");
//     console.log("log");
// console.groupEnd("G3");

// //variable in log and styled log

// console.log(`Name: %s, Age: %i`, name, age);
// console.log(`Name: %s, Age: %f`, name, age);

// console.log(`Name: ${name}, Age: ${age}`);

// const space = `10px`;
// const style = `padding: ${space}; background-color: yellow;
//                   color: blue; border: ${space} solid red;`;

// console.log("%c Styled Log", style);

// // //table()

// console.table(arr);

// console.table(obj);

// // //assertion()

// console.assert(x==1, "x is not equal to 1");
// console.assert(x==5, "x is not equal to 5");

//dir() dirxml()

// console.dir(obj);

// console.dirxml(obj);

// //try catch finally exception

try{
    throw new Error("exception 0");

    throw "exception 1";
    throw "exception 2";
    throw "exception 3";
}
catch(EX){
    try{
        console.error(EX);
    }
    catch{
        console.error(EX.message);
    } 
}
finally{
    console.warn("finally block here");
}

console.timeEnd("timer");