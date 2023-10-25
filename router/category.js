const route = require("express").Router();
const {register,login, dashboard, profile,} = require("../controller/userController");
const authMiddleware = require("../middleware/authmiddleware");

route.post("/register", register);
route.post("/login", login);

route.get("/dashboard", authMiddleware, dashboard);
route.get("/profile", profile);

module.exports = route;


