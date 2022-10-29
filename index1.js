const mongoose= require("mongoose")
const conn= require('./Controler/dbconnect.js')
// const mdl=require("./modle/modle.js")
// const module=require('./modle/modle')
const inpt = process.argv
console.log("Do you want to enter data (y/n)"+"");
let a='y';
while(a=='y'||a=='Y'||a=='yes'){
    inpt[3];
    const data=mongoose.Schema({
        id:{
        type :Number,
        require:true
    },
    name:String,
    profile:String},{timestamp:true})
    const entrdta=async()=>{
        const user= new mongoose.model('newdbs',data)
        const Dta=new user({id:000,name:'Wasif ali wasif',profile:'sufi'})
        let result = await Dta.save();
        console.log(result)
    }
    entrdta();
}