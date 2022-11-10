const mongoose= require("mongoose")
const conn= require('./Controler/dbconnect.js')
const mod=require("./modle/modle")
const express= require("express")
const app = express()
const port= 3000;
app.listen(port)
app.use(express.json())
console.log(`app is connected with port    ${port}`)
app.post("/",(req,resp)=>{
  console.log(req.body)
  let dta=new mod({
    id:req.body.id,
    name:req.body.name,
    profile:req.body.profile
  })
  resp.send(dta)
  dta.save()
  console.log("data hasbeen saved successfully")
})
app.delete("/",(req,resp)=>{
    mod.findOneAndDelete({id:req.body.id})
    resp.send("Data \n"+mod+" \n has been deleted successfully")
    })
    app.post('/update',(req,res)=>{
      mod.findOneAndUpdate({id:req.body.id},req.body)
          .then(()=>res.send("data is update"))
          .catch(err=>res.send(err));
      })
app.get("/",(req,resp)=>{
  resp.send(mod)
  mod.find()
})