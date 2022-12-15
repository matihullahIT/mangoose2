const mongoose=require('mongoose')
const dta=mongoose.Schema
const udta=new dta({
    Emplpoyer_name:{
        type:String,
        unique:true,
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
}
},{timestamps:true})
    const userdta=mongoose.model('signupdta',udta) 
    module.exports=userdta; 