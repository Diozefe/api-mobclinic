import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ProfissionalEntity } from "./Profissional";
import { UsuarioEntity } from "./Usuario";

@Entity({name:'permissoes'})
export class PermissaoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({default:true})
    criar_atendimento: boolean;

    @Column({default:false})
    confirma_agenda: boolean;

    @Column({default:false})
    especialista: boolean;

    @Column({default:false})
    gerente: boolean;

    @Column({default:false})
    adm: boolean;

    @Column({default:false})
    master: boolean;

    @OneToMany(() => UsuarioEntity, usuario => usuario.entereco_id)
    usuario: UsuarioEntity[];

    @OneToMany(() => ProfissionalEntity, profissional => profissional.entereco_id)
    profissional: ProfissionalEntity[];

    @Column({type:'timestamp'})
    createdAt: string;

    @Column({type:'timestamp', nullable:true})
    updatedAt?: string;

    @Column({type:'timestamp', nullable:true})
    deletedAt?: string;

}
