const os=require('os')
// console.log("architecture",os.arch())
// console.log("cpus",os.cpus())
// console.log("free memory available",os.freemem())
// console.log("total memory",os.totalmem())
// console.log("machine",os.machine())
// console.log("version",os.version())
const fs=require("fs")
const specs=`architecture ${os.arch()}
cpus ${os.cpus()}
free memory available ${os.freemem()}
total memory ${os.totalmem()}
machine ${os.machine()}
`
fs.writeFile("../data/specs.txt",specs,(err)=>{
    console.log(err)
})