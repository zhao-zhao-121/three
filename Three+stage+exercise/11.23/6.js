
//导入模块
const http = require("http");


//创建服务器
const sever = http.createServer();

//监听请求
sever.on("request",(req,res)=>{
    if(req.url==='/'){
        res.end("hello world");
    }
    if(req.url==='/html5'){
        res.end("2003"
        );
    }
})
//4启动服务
sever.listen(8080,()=>{
    console.log("sever is running at http://127.0.0.1:8080");
});