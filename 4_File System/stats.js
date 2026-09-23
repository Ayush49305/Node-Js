const fs=require('fs')

const stats=fs.statSync('hello.txt')

console.log(stats.isFile())
console.log(stats.isDirectory())
console.log(stats.size)
console.log(stats.mtime)
console.log(stats.atime)
