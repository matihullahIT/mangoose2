const conn=require('../backend/5-Config/config')
const Routes=require("../backend/1-Routes/routes")
const express= require("express")
const app = express()
const port="3300"
app.use("/user",Routes)
app.get("/",(req,resp)=>{
    resp.send("hello g")
})
const dbconn=async()=>{
    try{
        await conn();
        console.log("db is connected")
    }catch(error){
        console.log(error+"there is some error in the code")
    }   
}
app.listen(port,()=>{
    console.log(`server is working on the port number ${port}`)
    dbconn();
})