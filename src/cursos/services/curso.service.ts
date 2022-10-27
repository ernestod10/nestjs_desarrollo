import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from '../curso.entity';
import { cursoDto } from '../cursodto';
@Injectable()
export class CursoService {
    constructor(
        @InjectRepository(Curso) private cursoRepository: Repository<Curso>,
    ){}



    /*getCurso(id:number){
        return('Curso con id: ' + id);
    }
    getCursos(){
        return '';
    }
    
    createCurso(newCurso: any, id: number){
        return newCurso;
    }
    
    deleteCurso(id: number){
        return id;
    }
    
    updateCurso(id: number, newCurso: any){
        return newCurso;
    }*/
}
