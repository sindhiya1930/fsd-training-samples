var express = require('express')
var app = express()
var repo=require('./colorrepo')
var repomongoose=require('./colorrepo.mongoose')
var bodyParser=require('body-parser');
var cors=require('cors');
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.set('view engine','pug')
app.set('views','./views')
// parse application/json
app.use(bodyParser.json())
app.get('/color', function (req, res) {
    repo.findcolor((err,data)=>{
        //res.json(data);
        res.render('index', { title: data[0].color, message: data[0].object })
    });
})
 
app.get('/ssdynamic', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })
app.post('/colors', function (req, res) {
    var color=req.body
    console.log("****")
    console.log(color)
    //repo.insertcolor(color,(result)=>{
    
            //res.status(201).json({message:"Inserted the document",id:color._id})
        //})

        repomongoose.insertcolor(color,(err,data)=>{
            if(err){
                console.log(err)
            }
            console.log("********")
            console.log(color)
            console.log(data)

                    res.status(201).json({message:"Inserted the document",id:data._id})
                })
})

app.delete('/colors/:colorid', function (req, res) {
var id=req.params.colorid
repo.deletecolor(id,(result)=>{
    console.log(result)
res.status(202).json({message:"Deleted the document",id:id})
})
})
 
app.get('/hello', function (req, res) {
    res.type('json')
  res.send('Hello World')
})

app.get('/hello1', function (req, res) {
    res.json({'success':'true'})
})
 
app.listen(4000,()=>console.log("Listening to port 4000..."))