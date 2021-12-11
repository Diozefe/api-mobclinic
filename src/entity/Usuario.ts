import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import { AgendaEntity } from "./Agenda";
import { EnderecoEntity } from "./Endereco";
import { FilaEntity } from "./Fila";
import { PermissaoEntity } from "./Permissao";

@Entity({name:'usuarios'})
export class UsuarioEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    sobrenome: string;

    @Column()
    cpf: string;

    @Column()
    telefone: string;

    @Column({nullable:true})
    telefone2?: string;

    @Column({nullable:true})
    email?: string;

    @Column()
    data_nascimento: string;

    @Column({nullable:true})
    senha?: string;

    @ManyToOne(() => EnderecoEntity, enderecos => enderecos.id)
    @JoinColumn({name:'endereco_id'})
    entereco_id: EnderecoEntity;

    @ManyToOne(() => PermissaoEntity, permissao => permissao.id)
    @JoinColumn({name:'profissao_id'})
    permissao_id?: PermissaoEntity;

    @OneToMany(() => AgendaEntity, agenda => agenda.id)
    agenda?: AgendaEntity[];

    @Column({type:'timestamp'})
    createdAt: string;

    @Column({type:'timestamp', nullable:true})
    updatedAt?: string;

    @Column({type:'timestamp', nullable:true})
    deletedAt?: string;
}
