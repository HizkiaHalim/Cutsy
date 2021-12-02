var express = require('express');
var mysql = require('mysql');
var app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(5500,(err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log('Server online: http://localhost:5500/');
    }
});