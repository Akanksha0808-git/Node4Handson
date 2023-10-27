const jwt = require("jsonwebtoken");
const secretkey="#@$%^&*"
const authMiddleware = (req, res, next) => {
  const Bearertoken = req.headers["authorization"];
  if (Bearertoken) {
   const token=Bearertoken.split(" ")[1];
   const valid = jwt.verify(token,secretkey);
   if (valid) {
    return next();
  }
return res.send ({msg:"user not allowed"})
 
  }
  return res.send({ msg: "not authorized for the particular resources" });
};
module.exports = authMiddleware;