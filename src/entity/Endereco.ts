import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ProfissionalEntity } from "./Profissional";
import { UsuarioEntity } from "./Usuario";

@Entity({name:'enderecos'})
export class EnderecoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rua: string;

    @Column({length:8})
    numero: string;

    @Column({length:50})
    bairro: string;

    @Column({nullable:true, length:20})
    cep: string;

    @Column({nullable:true, length:50})
    procedente: string;

    @OneToMany(() => UsuarioEntity, usuarios => usuarios.entereco_id)
    usuario?: UsuarioEntity[];

    @OneToMany(() => ProfissionalEntity, profissionais => profissionais.entereco_id)
    profissional?: ProfissionalEntity[];

    @Column({type:'timestamp'})
    createdAt: string;

    @Column({type:'timestamp', nullable:true})
    updatedAt?: string;

}
