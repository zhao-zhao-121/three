const express = require('express');
const cookie = require('cookie-parser');
const app = express();
app.use(cookie());


app.get('/',(req,res)=>{
    if(req.cookies.name){
        res.send('欢迎老朋友')
    }else{
        res.cookie('name','小赵',{   maxAge: 86400 * 1000});
   
        res.send("新朋友你好")
    }
})
app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});
