const mongoose =require("mongoose")
const dbname='mongodb://127.0.0.1:27017/user'
const connected=async()=>{
    mongoose.connect(dbname)
//     console.log('you are connected to Data base name '+dbname)
//     console.log("stored in folder "+__dirname+""+"& In file name"+__filename)
 }
connected()
if(mongoose.connect){
    console.log("db is connected")
}
else{
    console.log("error")
}
module.exports=connected()