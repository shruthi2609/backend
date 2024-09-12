const dns=require("dns")
dns.lookup("www.gmail.com",(err,address,family)=>{
console.log(err,address,family)
})