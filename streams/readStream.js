const fs=require("fs")
const readStream=fs.createReadStream("../data/sample.txt",{highWaterMark:10000})//10000 bytes
let bytesRead=0
let data
readStream.on("data",(chunk)=>{
    // bytesRead+=chunk.length
     console.log(chunk)
})
readStream.on("end",()=>{
    console.log(data)
})
readStream.on("close",()=>{
    console.log("streams closed")
})
readStream.on("error",(err)=>{
    console.log(err)
})
