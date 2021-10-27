const mongoose = require( 'mongoose' );
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/User');
const path = require('path');

let urlencodedParser = bodyParser.urlencoded({extended:false});
require("dotenv").config({path:"variables.env"});

app.set('view engine','ejs'); // 1
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname,'/code')));

const userinfoSchema = {
    id: String,
    Email: String,
    Password: String
}

const userinfo = mongoose.model("userinfo", userinfoSchema);



app.post("/signup", urlencodedParser ,function(res, req) {
    console.log(req.body);
    let newinfo = new userinfo({
        id: id,
        Email: email,
        Password: password
    });
    newinfo.save();
    res.redirect('/signup');
})

app.use('/signup', (res, req) => {
    req.render('signup');
})

app.listen(3000, err=>{
    if (err) {
        return console.log(err);
    }
    else{
        mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log( "MongoDB Connected success !!" ))
        .catch(err => console.log( err ))
    }
})
// console.log(process.env.MONGODB_URL);
//  에러방지 옵션설정