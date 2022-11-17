const mongoose =require('mongoose')
const signin=mongoose.Schema
const dta=new signin({
    email:{
        type:String,
        require:true
    },
    uname:{
        type:String,
        require:true
    },
    ph_number:{
        type:String,
        require:true
    },
    passward:{
        type:String,
        require:true
    }
})
const sigupdta=new dta.modle('signupform',dta)
const data =signupdta.modle({email:'matih@gmail.com',uname:'matih',ph_number:+923107263543,passward:3314})
data.save()
console.log(data)