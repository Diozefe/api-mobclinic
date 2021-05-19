const app = require('./config/customExpress');
const config = require("config");

app.listen(config.get('application.port'), ()=>{
    console.log('deu tudo certo cara')
})

