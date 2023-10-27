const route = require("express").Router();
const {Register,login} = require("../controller/userController");
const authMiddleware = require("../middleware/authmiddleware");

route.post("/register", Register);
route.post("/login", login);

route.get('/dashboard',authMiddleware,(req,res)=>{
    res.send({msg:"this is home page"})
})

module.exports = route;


