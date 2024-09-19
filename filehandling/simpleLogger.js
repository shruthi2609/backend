const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    const logData=`url ${req.url} method ${req.method} `
   fs.appendFile("../data/log.txt",logData,(err)=>{
    console.log(err)
   })
    res.end("dummy")
})
server.listen(3001,()=>console.log("server started"))