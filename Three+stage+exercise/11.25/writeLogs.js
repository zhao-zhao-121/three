const fs =require('fs');




const writelog =(req,res,next)=>{
    const infoStr = `${new Date().toLocaleString()} ${req.method} ${req.ip}\n`
    fs.appendFile('./logs', infoStr, (err) => {
        if (!err) console.log("已经写入")
        next()
    })
}
module.exports = writelog;