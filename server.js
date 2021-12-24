//jshint version:6
const express= require("express");
const bodyParser = require("body-parser");

const app = express();
app.get("/" , function(req , res){
    res.sendFile(__dirname+"/index.html");
});
app.use(bodyParser.urlencoded({extended : true} ));




app.get("/bmicaculator" , function(req , res){
    res.sendFile(__dirname+"/bmiCaculator.html");
});

app.post("/bmiCaculator.html" , function(req , res){
    var h = parseFloat(req.body.n1);
    var w =parseFloat(req.body.n2);
    var result = w/(h*h);
    res.send("your bmi is "+result);
});
 app.listen(3000,function(){
     console.log("this server is going on 3000 ");
 })