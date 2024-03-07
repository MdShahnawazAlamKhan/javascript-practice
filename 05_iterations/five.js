
//-----------------------------for each loop on array-----------------------------------
// const coding = ["js","ruby","java","python","cpp"]


// coding.forEach(function(item){ // call back function does't have a name
//     console.log(item);
// })
// Automatically the above function will execute and will also bring the item value as parameter

// coding.forEach(function(item){   //arrow function declaration
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)   //passing the function as parameter to for each loop, just giving the reference and it willl automatically print the values

// coding.forEach((item,index,arr)=>{   //arrow function doesn't only access item, it also access index and entire array list
//     console.log(item,index,arr);
// })
 

const myCoding=[      // most common way to store data in DB, so must to learn iteration over the array of objects
    {
        languageName:"JavaScript",
        languageFilename:"js"
    },
    {
        languageName:"java",
        languageFilename:"java"
    },
    {
        languageName:"Python",
        languageFilename:"py"
    }
]

myCoding.forEach((item)=>{
     console.log(item.languageName);
})