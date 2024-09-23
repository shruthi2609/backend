const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
// fs.readFile("../data/file2.txt",(err,data)=>{
//     if(err){
//         res.end(err)
//     }
//     else{
//         res.end(data)
//     }
// })
const readStream=fs.createReadStream("../data/sample.txt")

// readStream.on("data",(chunk)=>{
//     res.write(chunk)
// })
// // readStream.pipe(res)
// readStream.on("end",()=>{
//     res.end("done")
// })
// readStream.on("error",(err)=>{
//     console.log(err)
//     res.end("error ")
// })
readStream.pipe(res)
})
server.listen(3001,()=>console.log("server started"))