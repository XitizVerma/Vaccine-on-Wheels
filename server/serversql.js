const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./vow.db');
const sequelize = require('sequelize');
const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
db.serialize(function(){

})

// Start express app
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})