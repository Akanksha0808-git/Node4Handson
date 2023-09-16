// const jwt=require("jsonwebtoken")
// const authMiddleware=(req,res,next)=>{
// const token = req.headers["authorization"];
// if(token === undefined){
//     return res.send({msg:"user not authorized person or session expired"});
// }
// const validate=jwt.verify(token,process.env.secretkey);//this will take a booolean value(true/false)
// if(validate){
//     return next();
// }
// return res.send({msg:"not authorized for the particular resourses"});
// }
// module.exports= authMiddleware;
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token === undefined) {
    return res.send({ msg: "User not authorized person or session expired" });
  }
  const valid = jwt.verify(token, process.env.secretkey);
  if (valid) {
    return next();
  }
  return res.send({ msg: "not authorized for the particular resources" });
};
module.exports = authMiddleware;