const app = require('./config/customExpress');
const mongoDB = require('./infrastructure/database/database')
const config = require("config");
const db = mongoDB.connection

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open',()=>{
    app.listen(config.get('application.port'), ()=>{
        console.log('Banco de Dados conectato')
        console.log('API : Online | Port : '+config.get('application.port'))
    })
})