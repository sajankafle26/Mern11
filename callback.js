//normal function
function cook(){
    setTimeout(()=>{
        console.log("cooking")
    }, 5000)
}
function eat(){
    console.log("eat")
}
cook()
eat()

//with callback
function cook1(callback){
    setTimeout(()=>{
        console.log("cooking")
        callback()
    }, 5000)
    
}
function eat1(){
    console.log("eat")
}
cook1(eat1)