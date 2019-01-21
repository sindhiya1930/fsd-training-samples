function test()
{
    console.log("does something");
    return "success"
}

function testAsync(fn)
{
    setTimeout(function (){
        console.log("does something asyn")
        fn("success")
    },10)
    
   
}

console.log("start flow");
testAsync(function (res){
    console.log(res)
})
//var test=test()
//console.log(test);
console.log("finish...");