const mongoose = require('mongoose')
const config = require('config');
mongoose.connect(`mongodb+srv://${config.get('database.user')}:${config.get('database.password')}@${config.get('database.host')}/${config.get('database.dbname')}?retryWrites=true&w=majority`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

module.exports = mongoose;