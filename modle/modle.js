const mongoose=require("mongoose")
const tbname='userdata'
const userdata=mongoose.Schema({
    id:{
        type :Number,
        require:true
    },
    name:{
        type :String,
    },
    profile:{
        type :String,
    }
},{timestamp:true})
const entrdta=async()=>{
    const user= new mongoose.model('newdbs',tbname)
    const Dta=new user({id:1212,name:'Wasif ali wasif',profile:'sufi'})
    let result = await Dta.save();
    console.log(result)
}
module.exports=entrdta();
const find =async()=>{
    const mdl= new mongoose.model('newdbs',tbname)
    const User=  await mdl.findOne({id:1212});
    console.log(User);
}
module.exports=find();