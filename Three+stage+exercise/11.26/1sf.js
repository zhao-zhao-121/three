const express = require('express');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.urlencoded({extended:false}));
app.post('/post',(req,res)=>{
    res.send(req.body)
})
app.listen(8080, "0.0.0.0", () => {
    console.log("server is running at http://127.0.0.1:8080");
});