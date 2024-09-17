const http=require("http")
const data=require("./data/user")
const server=http.createServer((req,res)=>{
    let reqdata=" "
    console.log("server",req)
   if(req.url==="/users"&&req.method==="GET"){
    console.log("get req triggered")
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify(data))
   }
   if(req.url==="/users"&&req.method==="POST"){
   console.log(req)
   req.on("data",(data)=>{
    reqdata=data.toString()
   })
   req.on("end",()=>{
    /** DB save */
    console.log(reqdata)
    res.end(JSON.stringify(reqdata))
   })
   req.on("close",()=>{
    console.log("closed")
   })
 
   }

   else{
    res.writeHead(404,{"content-type":"text/html"})
    res.end("<h1>Not found </h1>")
   }

})
server.listen(3001,()=>console.log("server has started"))