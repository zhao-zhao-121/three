const express = require("express");
const app  = express();
app.get('/get/:id/:age',(req,res)=>{
    res.send(req.params);

})
app.get('/gets/:id?/:age?',(req,res)=>{
    res.send(req.params);

})


app.listen(8080,()=>{
    console.log('sever is running at http://127.0.0.1:8080');
})