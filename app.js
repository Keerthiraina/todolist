//jshint esversion:6

const express =require("express");
const bodyParser =require("body-parser");

const app = express();
app.set("view engine","ejs");

app.get("/",function(req,res){
  var today = new date();
  var options ={
    weekday: "long",
    day:"numeric",
    month: "long"
  };
  var day = today.toLocalDateString("en-US",options);
   res.render("list",{
     kindofDay: day
   });


});


app.listen(3501,function(){
  console.log("Server started on port 3000");
});
