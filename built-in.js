//Os Module
const os = require('os') //Imports buit in os module
// console.log(os.userInfo()) // gives user info 
// console.log(os.uptime()) // Returns system uptime in a sec

//Java script object which uses os module
const currentOs = {
    name: os.type(),
    upTime: os.uptime(),
    userInfo: os.userInfo()

}
// console.log(currentOs)

//Path module
const path = require('path') // Importing path module 
//  console.log(path.sep) //This returns path speretor of your os


//path.join
 const filePath = path.join('/pathjoin','test','test.txt') //This returns directory
//  console.log(filePath)

//path.basename
const base = path.basename(filePath) // Returns file in base of directory 
// console.log(base)

//path.resolve
const absolute = path.resolve(__dirname,'pathjoin','test','test.txt') // returns path same like path.join
// console.log(absolute)


//Fs module Sync Mode
const fs = require('fs')// Imports fs Module


const first = fs.readFileSync('../content/firsttext.txt','utf-8') //takes conent of firsttext.txt and puts it in vairable first
const second = fs.readFileSync('../content/secondtext.txt','utf8')//takes conent of second.txt and puts it in vairable second

// fs.writeFileSync('../content/third.txt',`Here is final result ${first},  ${second}`, { flag: 'a'})// Creates file and add text of second parameter also flag: 'a' appends the file with data
// console.log(first,second) // Prints data in both variable

// //Fs module Async Mode
// {const fs = require('fs')// Imports fs Module
// fs.readFile('../content/firsttext.txt','utf-8', (err,result)=> { // here err is error and result is data which readfile function ilitrate through
//     if(err){
//         return console.log(err)
//     }
//     else{
//         const first = result;

//     }
//     fs.readFile('../content/secondtext.txt','utf-8', (err,result)=> { // here err is error and result is data which readfile function ilitrate through
//         if(err){
//             return console.log(err)
//         }
//         else{
//             const second = result;
//         }
//         fs.writeFile('../content/thirdASYNC.txt','Hello World', (err,result)=>{
//             if(err)
//                 return console.log(err)
//             }
//             else{
//                 return console.log(result)
//             }
//         })

        
//         })
//     })







