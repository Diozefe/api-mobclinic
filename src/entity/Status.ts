import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { AgendaEntity } from "./Agenda";

@Entity({name:'status'})
export class StatusEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @OneToMany(() => AgendaEntity, agenda => agenda.id)
    agenda: AgendaEntity[];

    @Column({type:'timestamp'})
    createdAt: string;

    @Column({type:'timestamp', nullable:true})
    updatedAt?: string;

    @Column({type:'timestamp', nullable:true})
    deletedAt?: string;

}