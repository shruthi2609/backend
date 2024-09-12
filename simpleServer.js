const http=require("http")
const server=http.createServer((req,res)=>{
console.log(req)
res.end("hello from server")
})
server.listen(3001,()=>console.log("server is started"))
