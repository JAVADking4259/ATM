const {Router} = require('express');
const router = Router();
const {createAccount,getMoney,moneyTransfer,addMoney,viewDeposit} = require('./controller');

router.post('/account',createAccount);
router.put('/account/:id',getMoney);
router.put('/transfer/:id',moneyTransfer);
router.put('/addMoney/:id',addMoney);
router.get('/account/:id',viewDeposit);

module.exports=router;