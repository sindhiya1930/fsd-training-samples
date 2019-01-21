
//const mongodb = require('mongodb')
//const MongoClient = require('mongodb').MongoClient;
const mongoose=require('mongoose')
const assert = require('assert');
const MyModel=require('./schemas/schema')
// Connection URL

mongoose.connect("mongodb://localhost/sample")


function findcolor(callback){
    
    
      MyModel.find({}, function (err, docs) {
        callback(null, docs)
      });
    }

//function findcolor(callback){
//connect((err,client)=>{const db = client.db(dbName);
    //const collection = db.collection('color');
   
   
    // Find some documents
    //collection.find({}).toArray(function(err, docs) {
      //assert.equal(err, null);
      //console.log("Found the following records");
      //console.log(docs)
      //client.close();
     //callback(null,docs);
    //});
   //})
   
//}

function insertcolor(color,callback){
    console.log(color)
    const instance = new MyModel();
    instance.color =color.color;
    instance.object = color.object;
    instance.save(function (err,MyModel) {
        if(err)
        {
            callback(err,null)
        }
        console.log(MyModel)
        console.log("Inserted the colors")
        callback(err,MyModel);
    });
       
    }
    function deletecolor(id,callback){
        connect((err,client)=>{
            const db = client.db(dbName);
            const collection = db.collection('color');
             //delete one document
             collection.deleteOne({ _id : new mongodb.ObjectID(id) }, function(err, result) {
               console.log(result.deleteCount)
                console.log("Removed the document with the field a equal to "+id);
                callback(result);
        }) ;
    
        
           
           })
           
        }



module.exports={findcolor,insertcolor,deletecolor}
