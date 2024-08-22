const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

app.db = db
app.mongoose = mongoose

// configurando o consign para ler todos esses arquivos
consign()
        .include('./config/passport.js')
        .then('./config/middlewares.js')
        .then('./api/validation.js')   
        .then('./api')   
        .then('./schedule')
        .then('./config/routes.js')
        .into(app)

app.listen(3000, () => {
    console.log('\x1b[42m\x1b[37m%s\x1b[0m', 'Backend running...')
})