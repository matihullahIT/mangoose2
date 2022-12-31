const user=require('../4-Modle/modle')
module.exports.adddta=async(body)=>{
    const{
        Employer_name,
        Emplpoyer_Email,
        Project,
        Details,
        file,
    }=body;
    const User=new user({
     Emplyer_name:Employer_name,
     Emplpoyer_Email:Emplpoyer_Email,
     Project:Project,
     Details:Details,
     file:file
    })
    user.Emplpoyer_name=user.Emplpoyer_name
    const signupdta=await User.save() 
}
module.exports.finddta= async(body)=>{
const {
Emplpoyer_Email,
Emplpoyer_name
}=body;
try{
    const data = await user.find({
        Employer_name,
        Emplpoyer_Email
    }).exec();
return data
}
catch(error){
    console.log(error)
}
}
module.exports.updatedta= async(body)=>{
const {
Emplpoyer_Email,
Emplpoyer_name
}=body;
try{
    return await user.updateOne({
        Employer_name:Emplyer_name}
        ,{
            Emplpoyer_Email:Emplpoyer_Email}).exec()
}
catch(error){
    console.log(error)
}
};
module.exports.deletedta=async()=>{
    return await user.deleteOne({Emplpoyer_Email})
}
 