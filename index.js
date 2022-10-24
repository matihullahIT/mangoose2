const mongoose = require("mongoose")
const express=require("express")
mongoose.connect('mongodb://127.0.0.1:27017/mongo')
// const input = process.argv
app.listen(3000)
app.get("/",(req,resp)=>{
    resp.send("hello working ")
})
if(mongoose.connect){
    console.log("db is connected")
}
const newdta =new mongoose.Schema({
    id:Number,
    Name:String,
    father_name:String, 
})
const main=async ()=>{
    const Data =mongoose.model('newdbs',newdta)
    let data =new Data({id:244,Name: "talha",father_name:"fathername " })
    let results = await data.save(); 
    console.log(results)
}
main()