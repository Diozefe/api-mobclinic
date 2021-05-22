const query = require('../infrastructure/database/query')
const bcrypt = require('bcryptjs')
class User{
    criar(schema, dados){
        return query.Create(schema, dados)
    }
    async buscar(schema, email,dados){
        const user = await schema.findOne({email}).select('+senha')
        if(!await bcrypt.compare(dados.senha, user.senha))
            return new Promise((resolve, reject)=>{reject({error: 'Senha incorreta', id: 3})})
            
        return query.FindOne(schema, email)

        
    }
}

module.exports = new User