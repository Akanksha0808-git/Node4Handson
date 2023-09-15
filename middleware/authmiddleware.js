const jwt=require("jsonwebtoken")


const authMiddleware=(req,res,next)=>{
const bearer=req.headers["authorization"];
if(bearer === undefined){
    return res.send({msg:"no token"});
}
const token=bearer.split(" ")[1]
console.log(token)

if(token === undefined){
    return res.send({msg:"user not authorized person or session expired"});
}
const validate=jwt.verify(token,process.env.secretkey);//this will take a booolean value(true/false)
if(validate){
    return next();
}
return res.send({msg:"not authorized for the particular resourses"});
}
module.exports= authMiddleware;