const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const app = express();
const path = require('path');
const fs = require('fs');
const serviceNames = fs.readdirSync('./services');

// const {addUser} = require('./controller/userManager');
// addUser();
const bodyParser = require('body-parser');


// middle wares
app.use(morgan('dev'));
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json());
app.use(cors());


// check routes 
serviceNames.forEach(serviceName => {
  const service = require(`./services/${serviceName}/routes.js`)
  app.use('/api', service)
});

app.all("*", (req, res) => {
  res.status(404).json({
      message: "آدرس مورد نظر یافت نشد",
  });
});

// env
if (dotenv.error) {
  throw dotenv.error;
}


const Port = process.env.Port || 5000 
// server running
app.listen(3000,()=>{
    console.log(`server running on port ${Port}`);
})