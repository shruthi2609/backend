const http=require("http")
const data=[
    {
        "id":1,
        "username":"xyz"
    },
    {
        "id":2,
        "username":"abc"
    },
]
const server=http.createServer((req,res)=>{
console.log("hello")
// res.setHeader("content-type","text/html")
// res.end("<h1>Hello from server</h1>")
// res.setHeader("content-type","application/json")
// res.end(JSON.stringify(data))
// res.statusCode=404
// res.end("from server")
res.writeHead(200,{
    "content-type":"text/html"
})
res.end("<h1>hello from server</h1>")
})
server.listen(3001,()=>console.log("server is started...."))
