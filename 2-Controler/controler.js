const {
    adddta,
    finddta,
    updatedta,
    deletedta
  } = require("../3-services/UserService");
//   const {upload,
//     file
// }=require('../fileupload')
//   const fs=require('fs')
//   const { promisify } = require('util')
//   const unlinkAsync=promisify(fs.unlink);
module.exports.add=async(upload,req,resp)=>{
    try{

        adddta(req.body);
        resp.stnatus(200).send(true)
    }catch(error){
        console.log(error);
        resp.send(404).send(false)
    }
}
module.exports.find=async(upload,req,resp)=>{
    try{
    const result=await finddta()
        resp.send(result);
    }catch(error){}
}
module.exports.update=async(upload,req,resp)=>{
try{
    const result=await updatedta(req.body)
    if(result.acknowledged){
        resp.send(true);
        console.log(result);
    }
}
catch(error){
console.log(error);
resp.send(false);
}
};
module.exports.delte=async (upload,req,resp)=>{
    try{
        const result=await deletedta(req.body)
        if(result.acknowledged){
        resp.send(true);
        console.log(result);
        // deltefile;
        resp.end('data is deleted successfully')
    }
}
catch(error){
console.log(error);
resp.send(false);
}
}