const http=require("http")
const data=require("./data/user")
const server=http.createServer((req,res)=>{
   if(req.url==="/view"){
    console.log(req.url)
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify(data))
   }
   else{
    res.writeHead(404,{"content-type":"text/html"})
    res.end("<h1>Not found </h1>")
   }
})
server.listen(3001,()=>console.log("server has started"))