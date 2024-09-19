const fs=require("fs")
try{
    const data=fs.readFileSync("../data/file.txt","utf-8")
    console.log(data)
}
catch(err){
    console.log(err)
}
// fs.writeFileSync("../data/file3.txt","end")
// // fs.appendFileSync("../data/file2.txt","start")
