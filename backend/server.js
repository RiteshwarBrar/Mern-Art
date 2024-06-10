require('dotenv').config();
const express = require('express');
const paintingRoutes = require('./routes/paintings');
const mongoose = require('mongoose');
//express application
const app = express();

//middleware
app.use(express.json());  //parse json bodies
app.use((req, res, next) => {
    console.log(req.path, req.method)  //log the request path and method
    next()  //call the next middleware function
})

//routes
app.use('/api/paintings', paintingRoutes);

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        //listner for requests
        app.listen(process.env.PORT, () => {
        console.log('Listening on port', process.env.PORT);
  });
  
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });
