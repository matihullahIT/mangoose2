const user = require('../modle/modle')
module.exports.adduser=async (body)=>{
const {
    id,
    passward,
    name,
    profile
}=body;
const user =new user ({
    id:id,
    passward:passward,
    name:name,
    profile:profile
});
user.user_id=user._id
const userData=user.save()
}
module.exports.finduser =async(body)=>{
    const{
        id,
        passward
    }=body
    try{
            const userdata=await user.find({
                id:id,
                passward:passward
            }).exec();
            return userdata
    }
    catch(error){
        console.log(error);
    }
}
module.exports.update=async(body)=>{
    const{
        id,
        passward
    }=body
    return await user.updateOne({
        email:email
    },{
        passward:passward
    }).exec();
}
module.exports.deleteuser=async ()=>{
    return await user.deleteOne({user_id})
}