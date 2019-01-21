var nJwt = require('njwt');
var secureRandom = require('secure-random');

var signingKey = secureRandom(256, {type: 'Buffer'}); // Create a highly random byte array of 256 bytes

var claims = {
    name:"John",
    designation:"Admin"
 // iss: "http://myapp.com/",  // The URL of your service
  //sub: "users/user1234",    // The UID of the user in your system
  //scope: "self, admins"
}

var jwt = nJwt.create(claims,signingKey);
console.log(jwt)
var token = jwt.compact();
console.log(token);

nJwt.verify(token,signingKey,function(err,verifiedJwt){
    if(err){
      console.log(err); // Token has expired, has been tampered with, etc
    }else{
        console.log("***********")
      console.log(verifiedJwt); // Will contain the header and body
    }
  });