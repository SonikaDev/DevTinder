const express  = require('express')

const app  = express();

app.use("/hello",(req, res)=>{
res.send("Hello from the Sonika's server!!")
})
app.use("/user",(req, res)=>{
res.send("Userlist Sonika's server!!")
})
app.use((req, res)=>{
res.send("Hello from the server!!")
})
app.listen(3000, ()=>{
    console.log("sever listing on this port 3000......");
})