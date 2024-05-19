const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createAccount(req,res){
    try {
        const {depositAmount,fullName} = req.body;

        const result = await prisma.accountManagement.create({
            data: {depositAmount,fullName}
        });
        res.send(result);
    } catch (err) {
        const statusCode = error.status || 500
        res.status(statusCode).json({ error: error?.data?.message || 'خطای داخلی سیستم.' });
    }
};

async function getMoney(req,res){
    try {
        const {amountIntended} = req.body;
        const id = req.params.id;
        const currentDeposit = await prisma.accountManagement.findUnique({
            where: { id: parseInt(id) },
        });
        if(amountIntended > currentDeposit.depositAmount){
            throw {
                 status:400,
                 data: {
                    message:"موجودی کافی نیست"
                 }
            }
        }
            const depositAmount = -amountIntended+(+currentDeposit.depositAmount);
            await prisma.accountManagement.update({
                where: { id: parseInt(id) },
                data: { depositAmount },
              });
              res.send("بفرمایید اینم پول شما");
    } catch (error) {
        const statusCode = error.status || 500
        res.status(statusCode).json({ error: error?.data?.message || 'خطای داخلی سیستم.' });
    }
};

async function moneyTransfer(req,res){
try {
    const {amountIntended} = req.body;
    const id = req.params.id;
    const originAccount = await prisma.accountManagement.findUnique({
        where: {id:parseInt(id)}
    });
    const destinationAccount = await prisma.accountManagement.findUnique({
        where:{id:parseInt(req.body.id)}
    });
    if(amountIntended > originAccount.depositAmount){
        throw {
             status:400,
             data: {
                message:"موجودی کافی نیست"
             }
        }
    }
    const origin = -amountIntended+(+originAccount.depositAmount);
    const destination = amountIntended+destinationAccount.depositAmount;

    await prisma.accountManagement.update({
        where: { id: parseInt(id) },
        data: { depositAmount:origin },
    });
    await prisma.accountManagement.update({
        where: { id: parseInt(req.body.id) },
        data: { depositAmount:destination },
    });
    res.send("انتقال وجه با موفقیت انجام شد");
} catch (error) {
    const statusCode = error.status || 500
        res.status(statusCode).json({ error: error?.data?.message || 'خطای داخلی سیستم.' });
}
};

async function addMoney(req,res){
try {
    const {amountIntended} = req.body;
    const id = req.params.id;
    const correntMoney = await prisma.accountManagement.findUnique({
        where: {id:parseInt(id)}
    });
    const depositAmount = amountIntended+correntMoney.depositAmount;

    await prisma.accountManagement.update({
        where: {id:parseInt(id)},
        data: {depositAmount}
    });
    res.send("واریز وجه با موفقیت انجام شد");
} catch (error) {
    const statusCode = error.status || 500
        res.status(statusCode).json({ error: error?.data?.message || 'خطای داخلی سیستم.' });
}
};

async function viewDeposit(req,res){
    try {
        const id = req.params.id;
        const result = await prisma.accountManagement.findUnique({
            where:{id:parseInt(id)}
        });
        res.status(200).send(result);
    } catch (error) {
        const statusCode = error.status || 500
        res.status(statusCode).json({ error: error?.data?.message || 'خطای داخلی سیستم.' });
    }
}
module.exports={createAccount,getMoney,moneyTransfer,addMoney,viewDeposit};