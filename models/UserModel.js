const UserSchema = require('./schema/user')
const userRepository = require('../repository/userRepository')

class User{
    async criar(dados){
        const { cpf } = dados
        if(await UserSchema.findOne({cpf}))
            return new Promise((resolve, reject)=>reject({error: 'Este usuário já existe.', id:0 }));
        
        const user = await userRepository.criar(UserSchema, dados)
        user.senha = undefined
        return user
    }
    async buscar(dados){
        const {email} = dados;
        if( !await UserSchema.findOne({email}) )
            return new Promise((resolve, reject)=>reject({error: 'Usuário não encontrado', id: 1}))
        
        const user = await userRepository.buscar(UserSchema, email, dados)
        user.senha = undefined
        return user
        
    }
}
module.exports = new User