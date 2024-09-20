const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    const readStream=fs.createReadStream("../data/samplevideo.mp4")
    console.log(fs.statSync("../data/samplevideo.mp4"))
    const stats=fs.statSync("../data/samplevideo.mp4")
    res.writeHead(200,{
        "content-type":"video/mp4",
        "content-length":stats.size
    })
    readStream.pipe(res)
})
server.listen(3001,()=>console.log("server started"))