const path=require("node:path")

let myPath=path.join('user','ayush','resume.js')
let myAbsolutePath=path.resolve('user','ayush','resume.js')
console.log(myPath)
console.log(myAbsolutePath)
console.log(path.basename(myPath)) 