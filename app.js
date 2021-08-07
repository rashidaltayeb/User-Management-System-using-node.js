const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mysql = require('mysql')
require('dotenv').config()
///
const app = express();
const port = process.env.port || 5000
// Parsing middleware 
app.use(express.urlencoded({ extended: true }))
//Parse application/Josn
app.use(express.json())
// static files
app.use(express.static('public'))
// templating engine
app.engine('hbs',exphbs({extname: '.hbs'}))
app.set('view engine','hbs')
// export the route
const routes = require('./server/routes/user')
app.use('/',routes)
// listen to the port
app.listen(port, ()=> console.log(`Listeing on podr ${port}`))