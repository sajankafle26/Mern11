// Array special variable, which can hold more than one value
//Creating an Array (decleared an array)
let fruits=['apple','banana','kiwi']
let fruits1 = new Array('apple','banana','kiwi')

//data type
console.log(fruits)
//Accessing Array Elements index(0)
console.log(fruits1[1])
console.log(fruits.length)

for(let a=0; a<fruits.length; a++)
{
    console.log(fruits[a])
}
//adding Element in Array Element
fruits.push('graphs') //last
console.log(fruits)

fruits.unshift('green graphs') //1st
console.log(fruits)

//remove Element in Array Element
fruits.pop() //last
console.log(fruits)
fruits.shift() 
console.log(fruits)

//Changing  Element in Array Element
fruits[2]='red mango'
console.log(fruits)

console.log(fruits1.includes('apple'))
console.log(fruits1.join('-'))
console.log(fruits1.slice(1,3))
//'apple','banana','kiwi'
fruits1.splice(1,-1, "NNN","PPP")
console.log(fruits1)
 //map, find, filter
 let age =[2,40,100,15,50]
 let filter=age.filter((a)=>a> 15)
 console.log(filter)

 let find=age.find((a)=>a> 15)
 console.log(find)
 age.map(a=>console.log(a))
 age.forEach((a)=>console.log(a))

 /*  let number=[1,2,3,4,5,6,7,8,9]
    1. Find Even Number
    2. Print Each Number By 2 times
    3. using promt (enter number) and display number except promt data
 */