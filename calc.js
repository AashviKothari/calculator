const express =  require("express");
const bodyPrser = require("body-parser");

const app = express();
app.use(bodyPrser.urlencoded({extended:true}));
// app.get("/",function(req, res){
//     res.sendFile(__dirname+"/index.html");
// });
// app.post("/", function(req, res){
//     let n1 = Number(req.body.num1);//num1 from name of input from html
//     let n2 = Number(req.body.num2);

//     let result = n1+n2;

//     res.send("The Result for the Given input is: "+result);
// });
app.get("/bmicalculator",function(req, res){
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",function(req, res){
    var weight = Number(req.body.wght);
    var height  = Number(req.body.hght);

    let bmi = weight+height;
    res.send("Your BMI is: "+bmi);
})
app.listen(3000, function(){
    console.log("Server running at 3000")
})