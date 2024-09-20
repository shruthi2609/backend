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
const readStream=fs.createReadStream("../data/dummy.txt")
readStream.pipe(res)
readStream.on("error",(err)=>{
    console.log("error occured")
    res.end("error ")
})
})
server.listen(3001,()=>console.log("server started"))