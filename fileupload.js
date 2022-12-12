const multer= require('multer')
const express= require('express')
const app= express();
const port =3000;
// const conn=require('../backend/5-Config/config')
const fs =require('fs')
const { promisify } = require('util')
  const unlinkAsync=promisify(fs.unlink);
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
var storage = multer.diskStorage({
                        destination: function (req, file, cb) {
                          cb(null,'uploads')
                        },
                        filename: function (req, file, cb) {
                          cb(null,file.originalname+Date.now()+'.pdf')
                        }
                      });

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
app.get("/",(req,resp)=>{
  resp.send("hi")
})
app.listen(port)