var express=require("express");

var server=express();

server.get("/",(req,res)=>{
     res.send("<h1>Hello-world 2!!</h1>")
})

server.listen(3002,()=>{
    console.log("server is running at port 3002")
  })