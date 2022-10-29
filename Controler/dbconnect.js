const mongoose =require("mongoose")
const dbname='mongodb://127.0.0.1:27017/user'
const connected=async()=>{
    mongoose.connect(dbname)
    console.log('you are connected to Data base name '+dbname)
}
connected()
if(mongoose.connect){
    console.log("db is connected")
}
module.exports=connected()