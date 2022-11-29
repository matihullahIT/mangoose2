const mongoose =require('mongoose')
const dblocal='mongodb://127.0.0.1:27017/backend'
module.exports =mongoose.connect(dblocal);