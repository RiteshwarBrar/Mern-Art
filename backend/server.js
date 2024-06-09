const express = require('express');
//express application
const app = express();
//port
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Nimrat's Art Store"});
    });

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
