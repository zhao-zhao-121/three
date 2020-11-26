const express = require('express');
const app = express();

app.get ('/get',(req,res)=>{
    res.send('get');
})
app.post('/post',(req,res)=>{
    res.send('post');
})
app.put('/put',(req,res)=>{
    res.send('put');

})
app.delete('/delete',(req,res)=>{
    res.send('delete');
})



app.listen(8080,()=>{
    console.log('sever is running at http://127.0.0.1:8080');
})