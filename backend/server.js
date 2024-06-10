const express = require('express');
require('dotenv').config();
//express application
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)  //log the request path and method
    next()  //call the next middleware function
})

//port
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Nimrat's Art Store"});
    });

//listner for requests
app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
