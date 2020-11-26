const express = require('express');
const app =express();

app.use('/ssssss',express.static('abc'));

app.listen(8080,()=>{

    console.log('sever is running at http://127.0.0.1:8080');
})