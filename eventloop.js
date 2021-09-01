const { readFile} = require('fs')//BY using .promises you don't have to use readilepromise just use readfile //Importing fs module
const util = require('util')//Improting require module
const readfilepromise = util.promisify(readFile) //This stores reafile by promisifying it in readfilepromise variable
const start = async() =>{
    try{const first = await readfilepromise('readme.txt','utf-8') //Using readFile functuon but promisified
    console.log(first) 
 }
    catch(err){
        console.log(err)
    }
}
start()
























setTimeout(()=>{
    // console.log("This will run second even tho it is coded at first")
},0)

// console.log("This will be printed first ")

// const http = require('http')
// const server = http.createServer((req,res)=>{
// if(req.url === '/'){
//     res.end("Home page")
// }
// else if(req.url === '/about'){
//     //THis thing right here not only makes /about page slower but all page with / slower (THis is Sync code)
//     for(let i = 0; i < 1000; i++){
//         for(let j = 0; i <1000; j++){
//             console.log(`${i} ${j}`)
//         }
//     }
// }
// else {
//     res.end("Oops page you are looking for isn't available")
// }
// })
// server.listen(5000,()=>{
//     console.log("Surver is running at 5000")
// })