const express = require("express");
const writeLogs = require("./writeLogs");
const postdata = require("./post")
const router = require("./router");

const urlencode = require("urlencode")


const app = express();
 
app.use(writeLogs);
 
app.use(express.static("../11.25"))
 
app.use(postdata)
 
app.use(router)

app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080")
})