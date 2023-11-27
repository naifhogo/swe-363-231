const express = require('express');
const app = express();

//route files:
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');

//routers:
app.use('/', homeRouter);
app.use('/users', userRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});