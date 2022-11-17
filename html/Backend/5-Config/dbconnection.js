const mongoose = require('mongoose')
let dbname ='mongodb://127.0.0.1:27017/backend'
const conn=async()=>
{await mongoose.connect(dbname)
console.log("data base is connected successfully")
}
// module.exports=conn