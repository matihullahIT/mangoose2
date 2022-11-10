const express= require("express");
const app=express();
let port = 2000;
app.use(express.json())
app.listen(port)
console.log(`app is working on numebr   ${port}`)
app.get("/",(req,resp)=>{
    resp.send("its working")
    console.log(req.body);
})
app.post("/",(req,resp)=>{
    let mod = new mood({

    })
})        // if(mod.save()){
        //     resp.send("your data has been saved successfully")
        // }