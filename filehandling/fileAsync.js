const fs=require("fs")
fs.readFile("../data/sample.txt",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
       fs.writeFile("../data/samplecopy.txt",data,(err)=>{
        console.log(err)
       })
    }
})
// let data="new data"
// fs.writeFile("../data/file2.txt",data,(err)=>{
//     if(err){
//         console.log("error",err)
//     }

// })
// let data="updated data"
// fs.appendFile("../data/file2.txt",data,(err)=>{
//     if(err){
//         console.log("error",err)
//     }

// })

