const{
    add,
    find,
    update,
    Delet}=require('../Controler/controler')
    const user_routs=require('express').Router();
    user_routs.post("/add",add)
    user_routs.post("/find",find)
    user_routs.post("/update",update)
    user_routs.post("/delete",Delet)
    module.exports=user_routs;