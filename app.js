const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost/Booksdb'
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(url,{ useNewUrlParser:true })
const con = mongoose.connection

con.on('open',()=>{
    console.log('Database connected..')
})
app.use(express.json())

const books = require('./routes/books')
app.use('/books',books)

app.listen(3000)