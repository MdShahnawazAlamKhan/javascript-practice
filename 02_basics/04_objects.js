// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);   


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// 
//     {},
//     {},
//     {}
// ]

// const tinderUser = new Object()
// const tinderUser = {};
// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false 
// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname:"hitesh",
//             lastname: "choudhary"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// const obj4 = {4: "a",5:"b"}
// // const obj3 = Object.assign(obj1,obj2) //syntax 1
// // const obj3 = Object.assign({},obj1,obj2,obj4) //syntax 2
// const obj3 = {...obj1,...obj2} // using spred operator syntax 3

// const users = [
//     {
//         id:1,
//         email: "h@gmail.com"
//     },
//     {   
//         id:1,
//         email: "h@gmail.com"
//     }
// ]

// const obj3 = {obj1,obj2}
// console.log(obj3);

// console.log(users[1].email)
// console.log(tinderUser) // data type is Object
// console.log(Object.keys(tinderUser)) // loop through and find the entire keys and the data type is an Array
// console.log(Object.values(tinderUser)) // loop through and find the entire values and the data type is an arrya of values
// console.log(Object.entries(tinderUser)) // array within an array
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor);
const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(instructor);
