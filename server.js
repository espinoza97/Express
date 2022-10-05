//jshint esversion: 6

const express = require("express");//requiering express
const app = express();//making a express module

app.get("/",function(request,response){
  //console.log(request);
  response.send("<h1>Hello World</h1>");
});// /represent route or home page, this method defines what should happen when someone makes a request

app.get("/contacts",function(req,res){
  res.send("Contact me in gmail")
});

app.get("/about",function(req,res){
  res.send("I am Jordi Marku.")
});

app.get("/hobbies",function(req,res){
  res.send("Football")
});


app.listen(3000,function(){
  console.log("Server started at port 3000");
});//listening to a port
