const fs=require('fs');

//Synchrohnus

// const data=fs.readFileSync('test.txt','utf8')
// console.log(data)

//Asynchronus-callback

// fs.readFile('test.txt','utf8',(err,data)=>{
//     if(err)
//         console.log(error)
//     else{
//         console.log(data)
//     }

//     console.log("Last line of code")
    
// })

 //Async -promises

 (async()=>{
   const data=await fs.promises.readFile('test.txt','utf8',)
   console.log(data)
 })()