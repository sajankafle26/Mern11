// loop=> for , while, do while, for in, for of ,continue, break

//for loop
// for(let a=0; a< 10; a++)
// {
//     console.log("for loop", a)
// }

// // while loop
// let b=0
// while(b< 10)
// {
//     console.log("while loop", b)
//     b++
// }

/* Task to do 
*
**
***
****
*****
*/


// debugger;
// let number=5
// for(let a=0; a< 5; a++)
// {
//     for(let b=0; b<5; b++)
//     {
//    document.write(a, "<br>")
//     }
//     document.write("")
     
  
// }

// let rows=5
// for(let i=1; i<=rows; i++){
//     let start=""
//     for(let j=1; j<=i; j++){
//         start+="*"
//     }
//     console.log(start)
// }

// for(let a=5; a< 5; a++)
// {
//     if(a==3)
//     {
//         console.log("Happy Birthday 3")
//        // continue;

//        break;
//     }
    
//     console.log("for loop", a)
   
// }


//do while loop
// let c=6
// do{
//     console.log(c)
//     c++
// }while(c<10)


// for in loop , for of loop (array and object)
let fruits=["apple", "banana", "orange"]
//indexing 0
console.log(fruits[2])
for (const a of fruits) {
    console.log(a)
}
for (const a in fruits) {
    console.log(a)
}
for (const a in fruits) {
    console.log(fruits[a])
}
 