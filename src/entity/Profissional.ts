import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import { AgendaEntity } from "./Agenda";
import { EnderecoEntity } from "./Endereco";
import { FilaEntity } from "./Fila";
import { PermissaoEntity } from "./Permissao";

@Entity({name:'profissionais'})
export class ProfissionalEntity {

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
    email?: string;

    @Column()
    data_nascimento: string;

    @Column({nullable:true})
    senha?: string;

    @Column({nullable:true})
    especialidade?: string;

    @ManyToOne(() => EnderecoEntity, enderecos => enderecos.id)
    @JoinColumn({name:'endereco_id'})
    entereco_id: EnderecoEntity;

    @ManyToOne(() => PermissaoEntity, permissao => permissao.id)
    @JoinColumn({name:'permissao_id'})
    permissao_id: PermissaoEntity;

    @OneToMany(() => AgendaEntity, agenda => agenda.id)
    agenda: AgendaEntity[];

    @Column({type:'timestamp'})
    createdAt: string;

    @Column({type:'timestamp', nullable:true})
    updatedAt?: string;

    @Column({type:'timestamp', nullable:true})
    deletedAt?: string;
}