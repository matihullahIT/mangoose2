const multer= require('multer')
const express= require('express')
const app= express();
const port =3000;
const conn=require('../backend/5-Config/config')
const data =require('../backend/4-Modle/modle')
const fs =require('fs')
const { promisify } = require('util')
  const unlinkAsync=promisify(fs.unlink);
  app.use(express.json())
// const upload =multer({
//                         storage:multer.diskStorage({
//               destination:function(req,file,cb){
//                         cb(null,'uploads')
//               },
//               filename:function(req,file,cb) {
//                         cb(null,file.fieldname+"-"+Date.now()+".jpeg")
//               }
//             })
// }).single("signup_file")
let i=10
var storage = multer.diskStorage({
                        destination: function (req, file, cb) {
                          cb(null,'uploads')
                        },
                        filename: function (req, file, cb) {
                          cb(null,file.fieldname+Date.now()+i+'.pdf')
                        }
                      });
                      i++;
                      var upload = multer({ storage: storage }).single('signup');
                      module.exports=upload
// const deltefile=await unlinkAsync(req.file.path)
// module.exports=deltefile;
app.post("/d",async(req,resp)=>{
  await unlinkAsync(req.file.path)
})
app.use(express.json())
app.post("/",upload,async(req,resp)=>{
  resp.send("the file has been submitted")
})
app.post("/add",upload,async(req,resp)=>{
  const udata= new data({
    Emplpoyer_name:req.body.Emplpoyer_name,
    Emplpoyer_Email:req.body.Emplpoyer_Email,
    Project:req.body.Project,
    Details:req.body.Details
  })
  udata.save()
  .then(resp.send(udata))
})
app.post("/findbyid",upload,async(req,resp)=>{
  data.find({Emplpoyer_name:req.body.Emplpoyer_name})
  .then(data=>resp.send(data))
  .catch(err=>resp.send(err));
})
app.post("/find",upload,async(req,resp)=>{
  data.find()
  .then(data=>resp.send(data))
  .catch(err=>resp.send(err));
})

app.listen(port,()=>{
  console.log("server is working on port number "+port)
  conn;
})