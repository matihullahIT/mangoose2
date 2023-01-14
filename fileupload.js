const multer = require("multer");
const express = require("express");
const app = express(); 
const port = 4000;
const conn = require("../backend/5-Config/config"); // MongoDB connection module
const data = require("../backend/4-Modle/modle"); // MongoDB model
const fs = require("fs");
const bodyparser = require("body-parser");
const path = require("path");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);
app.listen(port,()=>{
  console.log(`server has been working on post number ${port}`)})
// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname +
        "_" +
        Date.now({ month: "short", day: "numeric", year: "numeric" })+
        ".pdf"
    );
  },
});
const upload = multer({ storage: storage }).single("signup");

// Parse request bodies as JSON
app.use(bodyparser.json());
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }));

// Serve the HTML file
app.get("/", (_, resp) => {
  resp.sendFile(`${__dirname}/html/boot strap/index.html`);
});
app.get("/signup", (_, resp) => {
  resp.sendFile(`${__dirname}/html/boot strap/signup.html`);
});

app.get("*", (_, resp) => {
  resp.sendFile(`${__dirname}/html/boot strap/404page.html`);
});

// Handle file uploads
app.post("/add", upload, async (req, resp) => {
  // Save data and file information to the database
  const udata = new data({
    Emplpoyer_name: req.body.Emplpoyer_name,
    Emplpoyer_Email: req.body.Emplpoyer_Email,
    Passward: req.body.Passward,
    Project: req.body.Project,
    Details: req.body.Details,
  });
  udata.save()
    .then((data) => resp.send("this data has been saved"+data))
})
app.post("/findbyname",upload,async(req,resp)=>{
  data.find({Emplpoyer_name:req.body.Emplpoyer_name,
  Passward:req.body.Passward})
  // if(data.find()!=Emplpoyer_Email&Passward){
  //   resp.send("there is no such data ")
  // }
    .then(data=>resp.send(data))
  .catch(err=>resp.send(err));
})
app.get("/login",upload,async(req,resp)=>{
  data.find({Emplpoyer_name:req.body.Emplpoyer_name,
    Passward:req.body.Passward})
  .then(data=>resp.send(data))
  .catch(err=>resp.send(err));
})
app.post("/find",upload,async(req,resp)=>{
  data.find()
  .then(data=>resp.send(data))
  .catch(err=>resp.send(err));
})
app.delete("/",upload,async(req,resp)=>{
  data.deleteOne({Emplpoyer_Email:req.body.Emplpoyer_Email})
  .then(data=>resp.send(data))
  .catch(err=>resp.send(err));
})