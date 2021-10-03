//jshint esversion:6

const express =require("express");
const bodyParser =require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
let items=[];

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
  var today = new Date();
  var options ={
    weekday: "long",
    day:"numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US",options);
   res.render("index",{
     kindiofDay: day,
     newlistitem:items
   });


});
app.post("/",function(req,res){

  let item = req.body.newItem;
   items.push(item);
  console.log(item);
  res.redirect("/");


});
app.listen(3000,function(){
  console.log("Server started on port 3000");
});
