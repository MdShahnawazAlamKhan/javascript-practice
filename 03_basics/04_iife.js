// Immediately Invoked Function Expressions (IIFE)
// (function () {
//     // …
//   })();
  
//   (() => {
//     // …
//   })();
  
//   (async () => {
//     // …
//   })();

(function sibbu(){   // this is a named IIF
    console.log(`DB CONNECTED`);
})();  // this function is invoked but is doesn't know when to stop the context. So, in this context we use semi-colon to stop the context

(()=>{
    console.log(`DB CONNECTED TWO`);    
})();  //again closing the context using semi-colon

((name)=>{
    console.log(`DB CONNECTED$ ${name} TWO`);    
})('Shahnawaz');



