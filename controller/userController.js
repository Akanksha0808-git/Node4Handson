// let arr=[]
// const jwt=require("jsonwebtoken")
// const bcrypt=require("bcrypt")
// const secretkey="abs@fcsdd34"
// const saltRounds=10
// const register = (req,res)=>{
//     const details=req.body;
//     const find=arr.find(item=> details.email=== item.email);
//     if(find){
//         res.send({msg:"email is already registered"});
//     }
//     else{
//     const hashpassword= bcrypt.hashSync(details.password,saltRounds);
//     const temp={
//         name:details.name,
//         email:details.email,
//         phoneno:details.phone,
//         password:hashpassword,
//     }
//     arr.push(temp)
//     // const token=jwt.sign({email:details.email},secretkey,{expireIn:"3600",})
//     const token= jwt.sign({email:details.email },process.env.secretkey,{expiresIn:"36000"
// });
//     res.status(200).send({msg:"User is registered successfully",result :arr,token:token});
// } 
// }
// const login=async (req,res)=>{
//     const details=req.body;
//     const find =arr.find(item=> details.email === item.email);
//     if(!find){
//         return res.status(200).send({msg:"User not registered"});

//     }
//     const validate= await bcrypt.compare(details.password,find.password);
//     if(!validate){
//         return res.send({msg:"user password is wrong !!"})
//     }
//     const token=jwt.sign({email:details.email},process.env.secretkey,{expiresIn:"36000"
// });
//     return res.send({msg:"User is LoggedIn successfully",token:token})
// }
// const dashboard = (req, res) => {
//     return res.send([
//       {
//         randomArticle: "random",
//       },
//     ]);
//   };
//   const profile = (req, res) => {
//     return res.send([
//       {
//         name: "Akanksha111",
//         email: "test@gmail.com",
//         profileimg: "ifhuyfhgiaf",
//       },
//     ]);
//   };
// module.exports= {login , register, dashboard, profile }
const arr2 = [];
const bcrypt = require("bcrypt");
const saltround = 10;
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  const userdata = req.body;
  console.log(userdata);

  const found = arr2.find((el) => el.email === userdata.email);
  if (found) {
    return res.send({ msg: "User already exist" });
  }

  const hashpassword = bcrypt.hashSync(userdata.password, saltround);
  const temp = {
    name: userdata.name,
    contact: userdata.contact,
    email: userdata.email,
    password: hashpassword,
  };
  arr2.push(temp);
  const token = jwt.sign({ email: userdata.email }, process.env.secretkey, {
    expiresIn: "36000",
  });
  res.status(200).send({
    msg: "User is registered successfully",
    result: arr2,
    token: token,
  });
};
const login = async (req, res) => {
  const userdata = req.body;
  console.log(userdata);

  const found = arr2.find((el) => el.email === userdata.email);
  //checking if email is present in data or not
  if (!found) {
    return res.send({ msg: "User not registered" });
  }

  //checking if password is correct or not
  const validate = await bcrypt.compare(userdata.password, found.password);
  if (!validate) {
    return res.send({ msg: "user password is wrong" });
  }

  const token = jwt.sign({ email: userdata.email }, process.env.secretkey, {
    expiresIn: "36000",
  });
  res.send({ msg: "User is LoggedIn successfully", userdata, token: token });
};
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
module.exports = { register, login, dashboard, profile };