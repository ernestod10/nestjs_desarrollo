
import {PersonaService} from '../services/persona.service'
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario.entity';
import { usuarioDto } from '../usuariodto';
import { Curso } from '../../cursos/curso.entity';
@Injectable()
export class EstudianteService extends PersonaService {

    constructor(
        @InjectRepository(Usuario)  userRepository: Repository<Usuario>,
        @InjectRepository(Curso) public cursoRepository: Repository<Curso>,
        ) {
            super(userRepository);
        }



    async inscribirCurso(idu: string, idc:string){
        let toUpdate = await this.cursoRepository.createQueryBuilder()
        .where("id = :id", { id: parseInt(idc) })
        .andWhere("estado = :estado", { estado: 'Publicado' })
        .getOne();
        if(toUpdate){
            let updated = Object.assign(toUpdate, {estudiantes: toUpdate.estudiantes });
            await this.cursoRepository.save(updated);
            return await this.userRepository.createQueryBuilder()
            .relation(Usuario, "cursos")
            .of(idu)
            .add(idc);
        }
    }


}
