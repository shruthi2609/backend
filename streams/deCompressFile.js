const fs=require("fs")
const zlib=require("zlib")
// const http=require("http")
// const server=http.createServer((req,res)=>{
// const readStream=fs.createReadStream("../data/samplecompressedgzip.txt.gz")
// const decompress=zlib.createGunzip()
// // readStream.pipe(decompress).pipe(res) =>send to the server as decompressed text

// })
// server.listen(3001,()=>console.log("server started"))
// const readStream=fs.createReadStream("../data/samplecompressedgzip.txt.gz")
// const writeStream=fs.createWriteStream("../data/decompressgunzip")
// const decompress=zlib.createGunzip()
// readStream.pipe(decompress).pipe(writeStream)
// const readStream=fs.createReadStream("../data/samplecompressedbrotli.txt.br")
// const writeStream=fs.createWriteStream("../data/decompressedbrotli")
// const decompress=zlib.createBrotliDecompress()
// readStream.pipe(decompress).pipe(writeStream)
const readStream=fs.createReadStream("../data/samplecompresseddeflate.txt.deflate")
const writeStream=fs.createWriteStream("../data/decompressdeflate")
const decompress=zlib.createInflate()
readStream.pipe(decompress).pipe(writeStream)



