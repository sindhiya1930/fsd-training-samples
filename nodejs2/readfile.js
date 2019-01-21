var fs=require('fs')

fs.readFile('./files/config.json',(err,data)=>{
    var result=JSON.parse(data)
    console.log('ip_address:  '+result.ip_address+'\nport:  '+result.port);
})

var sample=fs.readFileSync('./config.json')
var test=JSON.parse(sample)
console.log('ip_address:  '+test.ip_address+'\nport:  '+test.port);
