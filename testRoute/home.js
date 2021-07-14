var express = require('express');
var app = express();
  
app.set('view engine', 'ejs');

app.get('/home', (req, res)=>{
   res.render('home', {name:"Jyotirmoy"});
      
});
app.get('/about', (req, res)=>{
    res.render('about', {title:"About US"});
       
 });

var server = app.listen(4000, function(){
    console.log('listining to port 4000')
});
