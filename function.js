//function:- independent block of code that performs a specific task
 
// function create (function declaration)
function greet(){
    console.log("Hello World");
}
// function calling
greet();


// function with arguments and parameters
function greetUser(a)
{
    console.log("Good ", a ,"User")
}
greetUser('Morning');
greetUser('Evening');
greetUser('Night');


//default parameter
function person(name='student', ph=4444){
    console.log("Name: ", name, "Phone: ", ph)
}
person("John", 1234567890);
person('sajan')
person()