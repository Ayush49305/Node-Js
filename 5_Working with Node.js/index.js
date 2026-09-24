const fs =require('fs');

console.log("First code")
console.log("Second code")

//Synchronus (Blocking)

// console.log(fs.readFileSync("hello.txt","utf8"))

//asynchronus (non-blocking)

fs.readFile("hello.txt","utf8",(err,data)=>{
    if(err) console.log(error)
        else console.log(data)
})

console.log("3rd Code")

