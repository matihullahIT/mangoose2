const multer= require('multer')
const express= require('express')
const app= express();
const port =3000; 
const conn=require('../backend/5-Config/config')
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
                          cb(null, file.originalname+Date.now()+'.pdf')
                        }
                      });
                      
                      var upload = multer({ storage: storage }).single('signup');
                      module.exports=upload 
app.get("/",(req,resp)=>{
resp.send("working");
})
app.post("/",upload,(req,resp)=>{

})
app.listen(port)