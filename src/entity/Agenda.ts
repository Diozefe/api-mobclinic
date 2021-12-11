import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinColumn} from "typeorm";
import { FilaEntity } from "./Fila";
import { ProfissionalEntity } from "./Profissional";
import { ServicoEntity } from "./Servico";
import { StatusEntity } from "./Status";
import { UsuarioEntity } from "./Usuario";

@Entity({name:'agendas'})
export class AgendaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:10})
    data: string;

    @Column({length:5})
    hora: string;

    @Column({length:70, nullable:true})
    observacao?: string;

    @ManyToOne(() => UsuarioEntity, usuario => usuario.id)
    @JoinColumn({name:'usuario_id'})
    usuario_id: UsuarioEntity;

    @ManyToOne(() => ProfissionalEntity, profissional => profissional.id)
    @JoinColumn({name:'profissional_id'})
    profissional_id: ProfissionalEntity;

    @ManyToOne(() => ServicoEntity, servico => servico.id)
    @JoinColumn({name:'servico_id'})
    servico_id: ServicoEntity;

    @ManyToOne(() => StatusEntity, status => status.id)
    @JoinColumn({name:'status_id'})
    status_id: ServicoEntity;
    
    @ManyToMany(() => FilaEntity, fila => fila.id)
    fila?: FilaEntity[];

    @Column({type:'timestamp'})
    createdAt: string;

    @Column({type:'timestamp', nullable:true})
    updatedAt?: string;

}