const express = require('express');
const fs =require('fs');
const app =express();
app.use(express.static('aa'))
app.get("/",(req,res)=>{
    let url ='abc.txt';

    try {
        let data =fs.readFileSync(url);
        res.send(data)
    } catch (error) {
        throw new Error('读取错误');
        
    }
});

app.use((err,req,res,next)=>{
    res.send('读取失败:'+err.message);
});

app.use((req,res,next)=>{
    res.status(404);
    fs.readFile('./aa/index.html','utf8',(err,data)=>{
        if(err)
        {
            res.send(err);
        }else{
            res.send(data);

        }
    })
    
});

app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});
