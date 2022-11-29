const {
    adddta,
    finddta,
    updatedta,
    deletedta
  } = require("../3-services/UserService");
  
module.exports.add=async(req,resp)=>{
    try{
        adddta(req.body);
        resp.status(200).send(true)
    }catch(error){
        console.log(error);
        resp.send(404).send(false)
    }
}
module.exports.find=async(req,resp)=>{
    try{
    const result=await finddta()
        resp.send(result);
    }catch(error){}
}
module.exports.update=async(req,resp)=>{
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
module.exports.delte=async (req,resp)=>{
    try{
        const result=await deletedta(req.body)
        if(result.acknowledged){
        resp.send(true);
        console.log(result);
    }
}
catch(error){
console.log(error);
resp.send(false);
}
}