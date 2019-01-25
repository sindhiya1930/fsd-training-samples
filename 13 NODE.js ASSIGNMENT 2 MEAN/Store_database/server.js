var express = require('express')
var app = express()
var repo=require('./repo')
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
var bodyParser=require('body-parser');
var cors=require('cors');
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/items', function (req, res) {
    repo.finditems((err,data)=>{
        res.json(data);console.log(data)
    });
})
app.get('/item/:id', function (req, res) {
    var id=req.params.id
    repo.finditem(id,(err,data)=>{
        res.json(data);console.log(data)
    });
})

app.post('/signup', function (req, res) {
    var body=req.body;
    console.log(body)
   repo.signup(body,(err,result)=>{
       if(err){
           if(err.sqlMessage){
            var error={
                "code":400,
                "failure":err.sqlMessage
            } 
           }else{
           console.log(err.sqlMessage)
           var error={
            "code":400,
            "failure":"error occured"
        }}
res.json(error)
console.log(error);
       }else{
           var result={
            "code":200,
            "success":"user registered sucessfully"
              }
           res.json(result);
           console.log(result)
        }
    });
})
app.post('/signin', function (req, res) {
    var body=req.body;
    console.log(body)
   repo.signin(body,(err,result)=>{
       console.log(err)
       console.log(result)

       if(err){

res.json(err)
console.log(err);
       }else{
           res.json(result);
           console.log(result)
        }
    });
})

app.post('/addtocart', function (req, res) {
    var body=req.body;
    console.log(body)
   repo.addtocart(body,(err,result)=>{
       console.log(err)
       console.log(result)

       if(err){

res.json(err)
console.log(err);
       }else{
           res.json(result);
           console.log(result)
        }
    });
})

app.get('/count/:name/:date', function (req, res) {
    var customer_name=req.params.name
    var date=req.params.date
    console.log(customer_name)
    repo.count(customer_name,date,(err,data)=>{
        res.json(data);console.log(data)
    });
})

app.post('/order', function (req, res) {
    var body=req.body;
    console.log(body)
   repo.order(body,(err,result)=>{


       if(err){

res.json(err)
console.log(err);
       }else{
           res.json(result);
           console.log(result)
        }
    });
})

app.get('/cartitems/:name', function (req, res) {
    var name=req.params.name
    repo.cartitems(name,(err,data)=>{
        res.json(data);console.log(data)
    });
})

app.get('/myorders/:order_id', function (req, res) {
    var order_id=req.params.order_id
    repo.myorders(order_id,(err,data)=>{
        res.json(data);console.log(data)
    });
})

app.get('/orderlist', function (req, res) {
    var order_id=req.params.order_id
    repo.myorderlist((err,data)=>{
        res.json(data);console.log(data)
    });
})

app.post('/neworders', function (req, res) {
    var body=req.body;
    console.log(body)
   repo.neworders(body,(err,result)=>{


       if(err){

res.json(err)
console.log(err);
       }else{
           res.json(result);
           console.log(result)
        }
    });
})

app.delete('/deletecart', function (req, res) {
repo.deletecart((result)=>{
res.status(202).json({message:"Deleted the document"})
})
})

app.delete('/deleteitem/:item_name', function (req, res) {
    var item_name=req.params.item_name;
    repo.deleteitem(item_name,(result)=>{
    res.status(202).json({message:"Deleted the document"})
    })
    })
 
    app.get('/allorders', function (req, res) {
        repo.allorders((err,data)=>{
            res.json(data);console.log(data)
        });
    })

app.put('/editrequest', function (req, res) {
    var body=req.body;
    console.log(req.body)
    console.log(body.order_id)
    repo.editrequest(body,(err,result)=>{
        res.json(result);console.log(result)
    })
    })
app.listen(8001,()=>console.log("Listening to port 8001..."));