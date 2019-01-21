
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'sample';

function connect(callback){
    MongoClient.connect("mongodb://localhost:27017/dbName", { 
        
    useNewUrlParser: true },function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      if(err)
      {
          callback(err,null)

      }
      else{  callback(null,client)}
 
    });
}

function findcolor(callback){
connect((err,client)=>{const db = client.db(dbName);
    const collection = db.collection('color');
   
   
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      client.close();
     callback(null,docs);
    });
   })
   
}

function insertcolor(color,callback){
    console.log(typeof(color));
    connect((err,client)=>{
        const db = client.db(dbName);
        const collection = db.collection('color');
         //Insert one document
    collection.insertOne(color,(err,result) => {
        console.log("Inserted the colors")
        client.close();
        callback(result);
    }) ;

    
       
       })
       
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
