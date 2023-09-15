const data=require("../DataStore")
const article=(req,res)=>{
    res.send(data);
}
const profile=(req,res)=>{
    return res.send([{
        name:"akanksha",
         email:"akanksha342",
          profileimg:"ssdddd",
}
])
};
const dashboard=(req,res)=>{
    return res.send([{
        
        randomArticle:"random Article",
                }
])
};

module.exports={article,dashboard,profile,}