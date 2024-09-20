const fs=require("fs")
const readStream=fs.createReadStream("../data/samplevideo.mp4")
readStream.on("data",(chunk)=>{
    console.log(chunk)
})
readStream.on("end",()=>{
    console.log("end")
})