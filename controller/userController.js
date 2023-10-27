let arr = []; // database
const saltround = 10
const jwt=require("jsonwebtoken")
const secretkey="#@$%^&*"
const bcrypt = require("bcrypt")
const Register = (req, res) => {

  const userdata = req.body;
  console.log(userdata);

  const found = arr.find((item) => item.email === userdata.email);
  if (found) {
    return res.send({ msg: "User already exist" });
  }

  const hashpassword = bcrypt.hashSync(userdata.password, saltround);
  const temp = {
    // name: userdata.name,
    // contact: userdata.contact,
    email: userdata.email,
    password: hashpassword,
  };
  arr.push(temp); 
  const token = jwt.sign({ email: userdata.email },secretkey, {
    expiresIn: "7 d",
  });

  res.send({msg:"User Registered successfullyy"})
   
};

const login = (req, res) => {
    const userdata = req.body;
    console.log(userdata);
  
    const found = arr.find((item) => item.email === userdata.email);
    //checking if email is present in data or not
    if (!found) {
      return res.send({ msg: "User not registered " });
    }
  
    //checking if password is correct or not
    const validate =  bcrypt.compareSync(userdata.password, found.password);
    if (!validate) {
      return res.send({ msg: "user password is wrong" });
    }
  
    const token = jwt.sign({ email: userdata.email }, secretkey, {
      expiresIn: "7 d",
    });
    res.send({ msg: "User is LoggedIn successfully", userdata, token: token });
  };

module.exports = { Register, login };
