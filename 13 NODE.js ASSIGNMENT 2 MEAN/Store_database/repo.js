var mysql = require('mysql');

function connect(callback){
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass@word1",
  database: "emart"
});

con.connect(function(err) {
    if(err)
    {
        callback(err,null)

    }
    else{  callback(null,con)}
});
}
//function finditems(callback){
//connect((err,con)=>{
function finditem(id,callback){
    connect((err,con)=>{

    con.query("SELECT * FROM Items WHERE item_id="+id, function (err, result, fields) {
      if (err) throw err;
      console.log((result));
      /*Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row.item_name)
      });*/
       callback(null,result)
      });      
 
});
}
function finditems(callback){
    connect((err,con)=>{

    con.query("SELECT * FROM Items", function (err, result, fields) {
      if (err) throw err;
      console.log((result));
      /*Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row.item_name)
      });*/
       callback(null,result)
      });      
 
});
}


function signup(employee,callback){
    connect((err,con)=>{
console.log(employee.name)
        var sql = "INSERT INTO Customers (name,password) VALUES ('"+employee.name+"','"+employee.password+"')";
        console.log(sql)
        con.query(sql, function (err, result) {
          if (err) 
        {
callback(err,null)
        }
         else { console.log("1 record inserted");
          console.log(result)
        
       callback(null,result)
    }
      });      
});
}

function signin(employee,callback){
    connect((err,con)=>{
    var email= employee.name;
    var password = employee.password;
    var sql="SELECT * FROM customers WHERE name ='"+employee.name+"'";
    con.query(sql, function (error, results) {
        console.log(error)
        console.log(results)
    if (error) {
      // console.log("error ocurred",error);
      callback(err,null)

    }else{
      // console.log('The solution is: ', results);
      if(results.length >0){
        if(results[0].password == password){
          var result={
            "code":200,
            "success":"login sucessfull",
            "name":results[0].name
              }
              callback(null,result)
        }
        else{
          var result={
            "code":403,
            "failure":"Name and password does not match"
              }
              callback(result,null)
        }
      }
      else{
        var result={
          "code":403,
          "failure":"Name does not exist"
            }
            callback(result,null)
      }
    }
    });
})
}

function addtocart(employee,callback){
  connect((err,con)=>{
console.log(employee.name)
      var sql = "INSERT INTO cart (name,date,item_name,price,Quantity) VALUES ('"+employee.name+"','"+employee.date+"','"+employee.item_name+"','"+employee.price+"','"+employee.quantity+"')";
      console.log(sql)
      con.query(sql, function (err, result) {
        if (err) 
      {
callback(err,null)
      }
       else { console.log("1 record inserted");
        console.log(result)
      
     callback(null,result)
  }
    });      
});
}
function count(customer_name,date,callback){
  connect((err,con)=>{
      var sql ="Select SUM(Quantity) as number_of_items,SUM(price) as Total_Price from cart where name='"+customer_name+"' and  date='"+date+"'";
      con.query(sql, function (err, result) {
      if (err) throw err;
      console.log((result));
      /*Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row.item_name)
      });*/
       callback(null,result)
      });      
    });
}
function order(employee,callback){
  connect((err,con)=>{
console.log(employee.name)
      var sql = "INSERT INTO order_items (order_id,name,date,number_of_items,Total_price,request) Select '"+employee.order_id+"','"+employee.name+"','"+employee.date+"',SUM(Quantity) as number_of_items,SUM(price*Quantity) as Total_Price ,'"+employee.request+"' FROM cart group by cart.name,cart.date having  cart.name='"+employee.name+"' and  cart.date='"+employee.date+"'";
      console.log(sql)
      con.query(sql, function (err, result) {
        if (err) 
      {
        var err={
          "code":403,
        "failure":"Error while inserting"        }
callback(err,null)
      }
       else { console.log("1 record inserted");
       var result={
        "code":200,
      "success":"Inserted successfully"        }
        console.log(result)
      
     callback(null,result)
  }
    });      
});
}

function cartitems(date,callback){
  connect((err,con)=>{

  con.query("SELECT * FROM cart where name='"+date+"'", function (err, result, fields) {
    if (err) throw err;
    console.log((result));
    /*Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.item_name)
    });*/
     callback(null,result)
    });      

});
}

function myorders(order_id,callback){
  connect((err,con)=>{

  con.query("SELECT * FROM order_items where order_id='"+order_id+"'", function (err, result, fields) {
    if (err) throw err;
    console.log((result));
    /*Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.item_name)
    });*/
     callback(null,result)
    });      

});

}
function myorderlist(callback){
  connect((err,con)=>{

  con.query("SELECT * FROM order_items", function (err, result, fields) {
    if (err) throw err;
    console.log((result));
    /*Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.item_name)
    });*/
     callback(null,result)
    });      

});
}


function neworders(employee,callback){
  connect((err,con)=>{
console.log(employee.order_id)
      var sql = "INSERT INTO neworders (order_id,name,item_name,price,Quantity) Select '"+employee.order_id+"',name,item_name,price,Quantity from cart";
      console.log(sql)
      con.query(sql, function (err, result) {
        if (err) 
      {
       var err={
          "code":403,
        "failure":"Error while inserting"        }
callback(err,null)
      }
       else { console.log("1 record inserted");
       var result={
        "code":200,
      "success":"Inserted successfully"        }
        console.log(result)
      
     callback(null,result)
  }
    });      
});
}
function deletecart(callback){
  connect((err,con)=>{

  con.query("DELETE FROM cart", function (err, result, fields) {
    if (err) throw err;
    console.log((result));
    /*Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.item_name)
    });*/
     callback(null,result)
    });      

});
}

function deleteitem(item_name,callback){
  connect((err,con)=>{

  con.query("DELETE FROM cart where item_name='"+item_name+"'", function (err, result, fields) {
    if (err) throw err;
    console.log((result));
    /*Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.item_name)
    });*/
     callback(null,result)
    });      

});
}
function allorders(callback){
  connect((err,con)=>{

  con.query("SELECT * FROM order_items where request='requested'", function (err, result, fields) {
    if (err) throw err;
    console.log((result));
    /*Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.item_name)
    });*/
     callback(null,result)
    });      

});

}

function editrequest(employee,callback){
  connect((err,con)=>{

  con.query("UPDATE order_items SET request='"+employee.request+"' WHERE order_id='"+employee.order_id+"'", function (err, result, fields) {
    if (err) 
    {
     var err={
        "code":403,
      "failure":"Error while updating"        }
callback(err,null)
    }
     else { console.log("1 record inserted");
     var result={
      "code":200,
    "success":"Updated successfully"  , 
  "request":employee.request     }
      console.log(result)
    
   callback(null,result)
}
    });      

});

}


module.exports={finditems,finditem,signup,signin,addtocart,count,order,cartitems,myorders,myorderlist,neworders,deletecart,deleteitem,allorders,editrequest}