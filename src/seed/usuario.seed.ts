
import { uuid } from 'uuidv4';

export const usuarioSeed : any= 
    {
        id:uuid(),
        nome:'João',
        sobrenome:'Guilhermino',
        cpf:'00100200304',
        data_nascimento:'20/03/1998',
        entereco_id:1,
        telefone:'96999988787',
        createdAt:Date.now().toString()
    }
