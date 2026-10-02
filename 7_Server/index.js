const http=require('node:http');
const fs =require('fs');

const server=http.createServer((req,res)=>{
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers); 

    const date=new Date().toLocaleString();
    const content='new Request received,Date: ${date},url:${req.url}'

    fs.appendFile('log.txt',content,()=>{
        console.log("Request Received Succesfully")
    })

    res.end('Your server is ready')
})

server.listen(8001)