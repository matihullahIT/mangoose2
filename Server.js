const express=require("express");
const app =express();
app.use(express.json())
const port=4000;
const connection=require('./config/dbconnect')
const userrouts=require("./Routes/routs")
app.get("/",(req,resp)=>{
  resp.send("the api is working properly")
})
const dbconn=async ()=>{
  try{
    await connection();
    console.log("db is connected succecssfuly");
  }
  catch(error){
    console.log(error)
  }
}
app.listen(port,()=>{
  console.log(`server is working properly on port number${port}`)
})