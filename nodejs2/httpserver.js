var http=require('http');
var fs=require('fs');
var PORT=8080;

//s.readFile('./files/config.json',(err,data)=>{
//    var result=JSON.parse(data)
//    PORT=result.port;
//})
var config=fs.readFileSync('./files/config.json')
var config2=JSON.parse(config);
PORT=config2.port;

const server=http.createServer((req,res)=>{
console.log(req.url)
fs.readFile('./files/'+req.url ,(err,data)=>{
    if(err)
    {
        res.statusCode=404
        res.end('Page Not Found')
    }
    else{
res.statusCode=200
res.end(''+data)
    }
})
})

server.listen(PORT,()=> console.log('listening on port'+PORT));