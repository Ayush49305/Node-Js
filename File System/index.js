const fs=require('fs')

//Synchronus
//fs.writeFileSync('hello.txt','this is content')

//Asynchronus-callback based

// fs.writeFile('sample.txt','Hello Human',
//     function(err){
//         if(err) console.log(err)
//             else console.log("File written successfully")
//     }
// )
// console.log("Last line of code")


//Asynchronus-Promise based

async function createFile(){
    try{
       // await fs.promises.writeFile('test.txt','content...')  //To create and write content
      await fs.promises.appendFile('test.txt','\nNew content')  //To add new content in existence file
    } catch(error){
    console.log(error)
    }
}
createFile()
console.log("Last line of code")