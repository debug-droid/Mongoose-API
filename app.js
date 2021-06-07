const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const path = require('path')
const linkRoute = require('./routes/linkRoute')




mongoose.connect("mongodb://localhost/newlinks", (error, db) => {
  console.log(error);
  console.log(db);
},

app.listen(port, () => console.log('example app listening on port 3000...')))

app.use('/', linkRoute)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))