const router=require('express').Router();
const authController=require('./controller')

router.post('/add',authController.userController)
router.get('/get',authController.getAllData)
router.get('/get/:id',authController.getById)

module.exports=router;