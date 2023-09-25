const express = require("express")
const path = require('path')
const nodeserver = express();
const PORT = process.env.PORT || 8003;

nodeserver.get("/",(req,res)=>{res.send("나는 첫페이지의 응답 / 당신이 인터넷주소창 localhost:8003을 친것에 따른 전달이다.")})

nodeserver.get("/mypage",(req,res)=>{res.send("마이페이지")})

nodeserver.use((req,res)=>{res.status(404).sendFile(path.join(__dirname,"public/nopage.html"))})

nodeserver.listen(PORT,()=>{console.log(`${PORT}번으로 서버가 구동되고 있어요`)})

nodeserver.use(()=>{})