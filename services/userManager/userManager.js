const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function addUser(req,res){
  try {
    const { firstName, lastName, email,personId,birthDay ,depositAmount} = req.body;
    const result = await prisma.user.create({
      data: { firstName, lastName, email,personId,birthDay,depositAmount },
    });
  res.status(200).send(result);
  } catch (err) {
    const statusCode = error.status || 500
        res.status(statusCode).json({ error: error?.data?.message || 'خطای داخلی سیستم.' });
  }

};

async function getUser (req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    const statusCode = error.status || 500
        res.status(statusCode).json({ error: error?.data?.message || 'خطای داخلی سیستم.' });
  }
}; 

async function getAllUsers (req, res){
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    const statusCode = error.status || 500
        res.status(statusCode).json({ error: error?.data?.message || 'خطای داخلی سیستم.' });
  }
};

async function updateUser (req, res){
  try {
    const { firstName, lastName, email } = req.body;
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(req.params.id) },
      data: { firstName, lastName, email },
    });
    res.json(updatedUser);
  } catch (error) {
    const statusCode = error.status || 500
        res.status(statusCode).json({ error: error?.data?.message || 'خطای داخلی سیستم.' });
  }
};

async function deleteUser (req, res){
  try {
    await prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send(`user deleted`);
  } catch (error) {
    const statusCode = error.status || 500
        res.status(statusCode).json({ error: error?.data?.message || 'خطای داخلی سیستم.' });
  }
};

module.exports={addUser,getUser,getAllUsers,updateUser,deleteUser};