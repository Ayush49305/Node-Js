// Also called Built-in module

// ***Using Core Module

//---->FS(file system)<-----
// const fs= require('fs');

// fs.writeFile('file1.txt',"hello this is mkl",(err)=>{
//     if(err) console.log(err);
//     else console.log("File Written sucessfully")
// })

//------>path<-------

// const path=require('path');

// console.log(__dirname)
// console.log(__filename)

// const newPath=path.join(__dirname,'./alpha/beta.js')
// console.log(newPath)

//------>OS<-------

// const os=require('os');

// console.log(os.platform())

// ** Using ES6 Module **

// import fs from 'node:fs'

// fs.writeFile(
//     'example.txt',
//     'console.log("Hello world)',
//     (err)=>{
//         if(err) console.log("Error");
//         console.log("File Written Successfully")
//     }

// )

//***Third party Module */////

import express from 'express'

const server =express();

server.get('/',(req,res)=>{
    res.send([
       {
        name:'Ayush',
       } 
    ])
})

server.listen(8000,()=>{
    console.log('server Listening on http://localhost:8000')
})