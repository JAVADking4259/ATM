const {Router} = require('express');
const router = Router();
const {addUser,getUser,getAllUsers,updateUser,deleteUser} = require('./userManager');

router.post("/user",addUser);
router.get("/user/:id",getUser);
router.get("/user",getAllUsers);
router.put("/user/:id",updateUser);
router.delete("/user/:id",deleteUser);
module.exports=router;