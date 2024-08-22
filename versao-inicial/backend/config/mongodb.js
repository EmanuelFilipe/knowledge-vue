const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/knowledge_stats', {
    useNewUrlParser: true,         // Necessário no Mongoose 5.x
    useUnifiedTopology: true,      // Resolve o aviso sobre a engine de monitoramento
    useFindAndModify: false,       // Evita o uso de findAndModify depreciado
    useCreateIndex: true           // Garante que o Mongoose use createIndex em vez de ensureIndex
})
.catch(e => {
    const msg = 'ERROR! Unable to connect to MongoDB!'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
})

mongoose.connection.on('connected', () => {
    console.log('\x1b[42m\x1b[37m%s\x1b[0m', 'Connection to MongoDB established successfully.')
})

mongoose.connection.on('error', err => {
    const msg = 'ERROR! Problem connecting to MongoDB!'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
})
