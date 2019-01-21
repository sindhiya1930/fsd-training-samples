const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
 

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'sample';
 
// Use connect method to connect to the server
MongoClient.connect("mongodb://localhost:27017/dbName", { 
      
useNewUrlParser: true },function(err, client) {
    assert.equal(null, err);
console.log("Connected successfully to server");
   
   const db = client.db(dbName);
   const collection = db.collection('color');


   // Find some documents
   collection.find({}).toArray(function(err, docs) {
     assert.equal(err, null);
     console.log("Found the following records");
     console.log(docs)
   });


   //Insert one document
    //collection.insertOne({'color': 'orange', 'object': 'orange'},function(err,result){
       // console.log(result)
   // })
    client.close();
  });
