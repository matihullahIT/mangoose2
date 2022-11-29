const mongoose=require('mongoose')
const dta=mongoose.Schema
const udta=new dta({
    Emplpoyer_name:{
        type:String,
        require:true
},
Emplpoyer_Email:{
    type:String,
    require:true    
},
Project:{
type:String,
},
Details:{
    type:String,
},
// file:{
//     data:Buffer,
//     contentType:String,}},

},{timestamps:true})
    const userdta=mongoose.model('signupdta',udta) 
    module.exports=userdta; 