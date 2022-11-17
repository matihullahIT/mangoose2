const mongoose=require("mongoose")
const userdata=mongoose.Schema({
    id:{
        type :Number,
        require:true
    },
    passward:{
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
    const user= new mongoose.model('newdbs',userdata)
    module.exports=user;