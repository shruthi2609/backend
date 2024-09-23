const fs=require("fs")
const readStream=fs.createReadStream("../data/sample.txt",{highWaterMark:10000})//10000 bytes
const writeStream=fs.createWriteStream("../data/test.txt",{flags:'a'})
// readStream.pipe(writeStream)
writeStream.pipe(readStream)
// readStream.on("data",(chunk)=>{
//     // bytesRead+=chunk.length
//     writeStream.write(chunk)
// })
// readStream.on("end",()=>{
//     console.log("end")
// })
// readStream.on("close",()=>{
//     console.log("streams closed")
// })
// readStream.on("error",(err)=>{
//     console.log(err)
// })
