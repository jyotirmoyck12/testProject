var express = require('express');
var app = express();
const router = express.Router();

app.get('/', function(req, res){
   res.sendFile(__dirname+"/home.html");
});

app.get('/about', function(req, res){
    res.sendFile(__dirname+"/about.html");
 });

 app.get('/products', function(req, res){
    res.sendFile(__dirname+"/products.html");
 });
  
app.listen(3000);