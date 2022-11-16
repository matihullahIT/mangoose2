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