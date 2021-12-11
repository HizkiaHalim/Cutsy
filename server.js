var express = require('express');
var mongoose = require('mongoose');
var app = express();
var shortydb = require('./model/skema')

app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb+srv://shortyadmin:awdqsezxc24@cluster0.n3q7q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true , useUnifiedTopology:true
})

app.set('view engine','ejs');

app.get('/',async (req,res)=>{
    const urllist = await shortydb.find()
    res.render('index', {urllist: urllist});
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.post('/shorting',async (req,res)=>{
    await shortydb.create({ LONG_URL : req.body.longurl })
    res.redirect('/')
})

app.get('/:shurl', async(req,res)=>{
    const shortone = await shortydb.findOne({ SHORT_URL : req.params.shurl})

    if (shortone==null) {
        console.log("gk nemu")
        return res.sendStatus(404)
    }
    else{
        res.redirect(shortone.LONG_URL)
    }
})

app.listen(5500,(err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log('Server online: http://localhost:5500/');
    }
});