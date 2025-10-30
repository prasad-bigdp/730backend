// const os = require('os'); //common JS
// const path = require('path')
// //import os from 'os'  //ES6 module system
// console.log(os.type())
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.freemem())
// console.log(os.userInfo())
// console.log(os.homedir())
// console.log(os.hostname())

// const filepath = 'home/project/app/user.js';
// console.log(path.dirname(filepath))
// console.log(path.extname(filepath))
// console.log(path.basename(filepath))
// console.log(path.delimiter)
// console.log(path.join("prasad", "raj", "shekhar"))
// console.log(path.resolve("prasad","raj","shekhar"))
// const fs = require('fs');
// fs.writeFileSync('prasad.txt', "Hello to Node JS")

// //read the file
// const data = fs.readFileSync('prasad.txt','utf-8')
// console.log(data)

// fs.readFile('prasad.txt', "utf-8", (err,data) =>
// {
//     if (err) throw err;
//    console.log(data)
// })

// fs.appendFileSync('prasad.txt', "this is extra text");
// fs.unlinkSync('prasad.txt')





// const http = require('http')
// const data = [
//     {
//         "Title": "Wings of fire",
//         "Author":"Abdul Kalam"
//     },
//     {
//         "Title": "Monk who sold his ferrari",
//         "Author":"Robin sharma"
//     }
// ]
// const server = http.createServer((req, res) =>
// {
//     if (req.method === "GET")
//     {
//         res.writeHead(200, "This is the status", {
// 					"content-type": "application/json",
// 				})
// 				res.write(JSON.stringify(data))
// 				res.end()
//     }
//     if (req.method === "POST")
//     {
//         console.log("hi ")
//         let body = '';
//         res.on("data", (chunk) =>
//         {
//             body = body + chunk;
//             console.log(body)
//         })
//         console.log(body)
//         res.on('end', () =>
//         {
//             data.push(body);
//            res.writeHead(200, "This is the status", {
// 							"content-type": "application/json",
// 						})
//             res.write(JSON.stringify(data))
//             res.end()
//         })
//     }
   
// })
// server.listen(5000, () =>
// {
//     console.log("server is running at http://localhost:5000")
// })




// const url = require('url')
// const myURL = new URL('https://www.prasad.com/blogposts?category="JAVA"')
// console.log(myURL)

// console.log(myURL.searchParams.get('category'))
// const obj = require('./sampleModule')
import {sum} from './sampleModule.js'
sum(2,3)








