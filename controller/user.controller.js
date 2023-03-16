const experess=require("express");
const router=experess.Router();
const userData=require("../Tumbler/user.model")

router.post("/register",async (req,res)=>{
    try{
        const userDatafinal= await userData.find();
        return res.status(200).send(userDatafinal);
    }
    catch(error){
        res.status(500).send(error)
    }
})
router.post("/login",async (req,res)=>{
    try{
        const userDatafinal= await userData.create(req.body);
        return res.status(200).send(userDatafinal);
     }
    catch(error){
        res.status(500).send(error)
    }
})