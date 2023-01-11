require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const path = require('path')

app.use(express.static('public'))

app.use(morgan('dev'))
app.use(cors())

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));


app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));


// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/',(req,res) =>{

    res.render('site/index.ejs')
})

app.get('/contact',(req,res) =>{

    res.render('site/contact.ejs')
})

app.listen(3000,(error)=>{
    console.log(error ?  error:"RUN SERVER localhost:3000")
})


// require('./app_server/routers/routerManeger')(app)






