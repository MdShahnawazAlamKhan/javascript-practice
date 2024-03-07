//-------------------------------------for in loop on objects---------------------------

//const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

//------------------------------------for in loop on arrays--------------------------------
// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) { 
//     console.log(key);   //   will output 0, 1, 2, 3, 4 as keys/index, for in loop will not return values directly for keys
//     console.log(programming[key]); //values
// }

//---------------------------for in loop on Maps--------------------------------
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//so, maps are not iteratable, hence not output is shown. 
//We cannot write anything which is not iteratable in for in loop

for (const key in map) {
    console.log(key);
}