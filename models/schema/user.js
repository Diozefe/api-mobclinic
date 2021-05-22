const mongoDB = require('../../infrastructure/database/database')
const bcrypt = require('bcryptjs')


const UserSchema = new mongoDB.Schema({
    primeiroNome:{
        type:String,
        required: true
    },
    segundoNome:{
        type:String,
        required: true
    },
    cpf:{
        type:String,
        required: true,
        unique: true
    },
    dataNascimento:{
        type:Date,
        required: true
    },
    contato:{
        type:String,
        required: true
    },
    endereco:{
        type:String
    },
    email:{
        type:String,
        unique: true,
        required: true,
        lowercase:true
    },
    senha:{
        type:String,
        required: true,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash
    next();
})
const User = mongoDB.model('User', UserSchema);

module.exports = User