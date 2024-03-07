// const arr = [1,2,3,4,5,]
//..............................for of loop on an array...............................
// for (const x of arr) {
//     console.log(x);
// }

//-------------------------------for of loop on a string-------------------------------------
// const greetings = "Hello World!"
// for (const i of greetings) {
//     console.log(`Each character is: ${i}`);
// }

// // Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// console.log(map);

//--------------------------------for of loop on map----------------------

// for (const [key, value] of map) {
//      console.log(key, ':-', value);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// ------------------------------ for of loop on Objects------------------------
// In the below case, for of loop does not work for objects
// There are other ways to iterate Objects
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num," ");
// }


// const greetings = "Hello World!"
// let i=1
// for(const ch of greetings){
//     if(ch=== ' ') continue;
//     console.log(`Letter number ${i}: ${ch}`);
//     i++
// }

// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key,value] of map) {
//     console.log(key,":-",value);
// }

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key,value] of myObject) {
//      console.log(key,":-",value)   
// }
