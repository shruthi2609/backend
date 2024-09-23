const fs=require("fs")
const readStream=fs.createReadStream("../data/sample.txt",{highWaterMark:20*1024})//10000 bytes
let bytesRead=0
let count=0
readStream.on("data",(chunk)=>{
    bytesRead+=chunk.length
     count=count+1
    //  console.log(chunk.length)
    console.log(chunk.toString())

})
readStream.on("end",()=>{
    console.log("chunk count",count)
})
readStream.on("close",()=>{
    console.log("streams closed")
})
readStream.on("error",(err)=>{
    console.log(err)
})
