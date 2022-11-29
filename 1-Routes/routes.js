const {
    add,
    find,
    update,
    delte
} = require('../2-Controler/controler');
const signupRoute= require('express').Router()
signupRoute.post("/add",add)
signupRoute.post("/find",find)
signupRoute.post("/update",update)
signupRoute.post("/delete",delte);
module.exports=signupRoute;