const express = require('express');
const app = express();
const session =require('cookie-session');

app.use(session({name:'zyd',secret:'sadadaafasa',maxAge:10*60*1000,}));

app.get('/',(req,res)=>{
    if(!req.session.count){
        req.session.count=1;
    }else{
        req.session.count++;
    }
    res.send(req.session.count+"次");
});
app.listen(8080,()=>{
    console.log('sever is at http://127.0.0.1:8080');
})