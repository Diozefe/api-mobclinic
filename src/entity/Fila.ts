import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { AgendaEntity } from "./Agenda";

@Entity({name:'filas'})
export class FilaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:15})
    status: string;

    @ManyToOne(() => AgendaEntity, agenda => agenda.id)
    @JoinColumn({name:'agenda_id'})
    agenda_id: AgendaEntity;

    @Column({type:'timestamp'})
    createdAt: string;

    @Column({type:'timestamp', nullable:true})
    updatedAt?: string;

}