import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { UsuarioEntity } from "./Usuario";

//Salar muitos para muitos
//https://orkhan.gitbook.io/typeorm/docs/many-to-many-relations

@Entity({name:'anamnesias'})
export class AnamnesiaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    possui?: boolean;

    @Column({length:100, nullable:true})
    tipo?: string;

    @Column({nullable:true})
    descricao?: string;

    @ManyToMany(() => UsuarioEntity)
    @JoinColumn({name:'usuario_id'})
    @JoinTable()
    usuario_id: UsuarioEntity;

    @Column({type:'timestamp'})
    createdAt: string;

    @Column({type:'timestamp', nullable:true})
    updatedAt?: string;

    @Column({type:'timestamp', nullable:true})
    deletedAt?: string;

}