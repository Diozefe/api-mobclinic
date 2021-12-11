import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { AgendaEntity } from "./Agenda";
import { FilaEntity } from "./Fila";
import { ProfissionalEntity } from "./Profissional";
import { UsuarioEntity } from "./Usuario";

@Entity({name:'servicos'})
export class ServicoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    duracao: string;

    @Column()
    categoria: string;

    @Column({nullable:true})
    preco?: string;

    @Column()
    descricao: string;

    @Column({nullable:true})
    observacao?: string;

    @OneToMany(() => AgendaEntity, agenda => agenda.id)
    agenda: AgendaEntity[];

    @Column({type:'timestamp'})
    createdAt: string;

    @Column({type:'timestamp', nullable:true})
    updatedAt?: string;

    @Column({type:'timestamp', nullable:true})
    deletedAt?: string;

}