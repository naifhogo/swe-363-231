const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});
app.post('/submit', (req, res) => {
  // Process the submitted form data here
  // ...

  // Send a response back to the client
  res.send('Form submitted successfully!');
});

app.use(express.urlencoded({ extended: true }));
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');


// Use the formRoutes middleware

app.use('/', homeRouter);
app.use('/users', userRouter);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(express.static('swe-363-231'));