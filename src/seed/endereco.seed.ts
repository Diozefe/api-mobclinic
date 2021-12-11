import { EnderecoEntity } from "../entity/Endereco";
import { uuid } from "uuidv4";

export const enderecoSeed: EnderecoEntity[] = [
    {
        id:1,
        rua:'Av. Fab',
        numero:'2020',
        bairro:'Centro',
        cep:'68900-073',
        procedente:'cliente',
        createdAt:Date.now().toString(),
    }
]