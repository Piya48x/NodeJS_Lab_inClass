// const {a, test} require("./data")

// console.log(obj)

// const hellFunc = require("./data")

// console.log(hellFunc())

// const {testFunc } = require("./data")

// testFunc();

// console.log(__filename)
// console.log(__dirname)

// const path = require("path")
// console.log(__dirname + "/" + "data.js")
// console.log(path.join(__dirname, "data.js"))

// const fs = require("fs")

// const path = require("path")

// fs.readFile(path.join(__dirname, "hello.txt"), {encoding: 'utf-8'}, (err, data)=>{
//     //console.log(data)
//     fs.writeFile('hello2.txt',data,() => {
//         console.log("Done writeFile")
//     })
// })

// const fs = require("fs/promises");
// const { Agent } = require("http");
// const path = require("path");

// const run = async () => {
//   const data = await fs.readFile(path.join(__dirname, "hello.txt"), {
//     encoding: "utf-8",
//   });

//   console.log(data);
// };

// run()

// const http = require('http')

// const server = http.createServer((req, res)=>{
//     console.log(req.method)
//     console.log(req.url)

//     res.end("Hello")
// })

// server.listen('8000', ()=>{
//     console.log('Server is runnig on port 8000')
// })

// Lab 01 node build-in LIbrary
// const fs = require("fs")
// const axios = require("axios")
// const { v4: uuidv4} = require("uuid")

// console.log(uuidv4())

//Lab 02
const { readFileJSON, writeFileJSON } = require("./fileService");

const run = async () => {
  const readData = await readFileJSON("hello.txt");

  //   console.log(readData);
  writeFileJSON("helllo3.txt", readData);
};

run();

