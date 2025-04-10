let myPromise =new Promise(function(myResolve, myReject){
        if(2==3)
        {
            myResolve("sucucess")
        }
        else 
        {
            myReject("Rejected Hello")
        }
})
// console.log(myPromise)
myPromise.then(()=>console.log("Data Update")).catch(()=>console.log("error"))


// fetch('https://fakestoreapi.com/products/categories').then(c=>c.json()).then(data=>console.log(data.map(a=>document.write(`<li>${a}</li>`))))

// fetch('https://fakestoreapi.com/products').then(c=>c.json()).then(data=>console.log(data))


//https://dummyjson.com/products/categories
//https://dummyjson.com/products/

fetch('https://dummyjson.com/products').then(c=>c.json()).then(data=>console.log(data))