let arr=[]
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const secretkey="abs@fcsdd34"
const saltRounds=10
const register = (req,res)=>{
    const details=req.body;
    const find=arr.find(item=> details.email=== item.email);
    if(find){
        res.send({msg:"email is already registered"});
    }
    else{
    const hashpassword= bcrypt.hashSync(details.password,saltRounds);
    const temp={
        name:details.name,
        email:details.email,
        phoneno:details.phone,
        password:hashpassword,
    }
    arr.push(temp)
    // const token=jwt.sign({email:details.email},secretkey,{expireIn:"3600",})
    const token= jwt.sign({email:details.email },process.env.secretkey,{expiresIn:"36000"
});
    res.status(200).send({msg:"User is registered successfully",result :arr,token:token});
} 
}
const login=async (req,res)=>{
    const details=req.body;
    const find =arr.find(item=> details.email === item.email);
    if(!find){
        return res.status(200).send({msg:"User not registered"});

    }
    const validate= await bcrypt.compare(details.password,find.password);
    if(!validate){
        return res.send({msg:"user password is wrong !!"})
    }
    const token=jwt.sign({email:details.email},process.env.secretkey,{expiresIn:"36000"
});
    return res.send({msg:"User is LoggedIn successfully",token:token})
}
const dashboard = (req, res) => {
    return res.send([
      {
        randomArticle: "random",
      },
    ]);
  };
  const profile = (req, res) => {
    return res.send([
      {
        name: "Akanksha111",
        email: "test@gmail.com",
        profileimg: "ifhuyfhgiaf",
      },
    ]);
  };
module.exports= {login , register, dashboard, profile }