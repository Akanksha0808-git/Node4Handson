const validate=(req,res,next)=>{
    if(req.param.age>=18){
        next();
    }
    else{
        res.send({msg:" user is not allowed"})
    }
}
module.exports=validate