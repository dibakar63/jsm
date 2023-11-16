const userModel=require('./model.js');

const userController=async(req,res)=>{
   
    try {
        let users = new userModel({
            id: req.body.id,
            First_name: req.body.First_name,
            Last_name: req.body.Last_name,
            Orders: req.body.Orders,
            
          })
        
        let nwusers=await  users.save();
        res.status(201).send({
            success:true,
            message:"User saved successfully",
            users:nwusers.First_name
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,message:'Error in Add data',
            error
        })
    }
}
const getAllData=async(req,res)=>{
    let users;
   try {
     users=await userModel.find()
     res.status(201).send({
        success:true,message:' users found sucessfully',
        users
     })
    
   } catch (error) {
    res.status(500).send({
        success:false,message:'No users found',
        users
     })
   }
}
const getById=async(req,res)=>{
    let id=req.params.id;
    let users;
    try {
        users=await userModel.findById(id)
        if(!users){
            res.status(500).send({
                success:false,
                message:"no users found with this id",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"User found with this id",
            users
        })

        
    } catch (error) {
       console.log(error) 
    }
    
}

module.exports.userController=userController
module.exports.getAllData=getAllData
module.exports.getById=getById
