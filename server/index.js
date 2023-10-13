const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');
const password = require('./secrets');

const app = express();
const PORT = process.env.PORT || 3000;
const uri = `mongodb+srv://odetundeoreoluwadavid:${password}@weblogcluster.rfcdyyw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

app.use(express.json());
app.use(authRouter);

// Connect MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB Connection Succeeded.');
  })
  .catch((err) => {
    console.log('Error in DB connection: ' + err)
  });


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}!`);
});