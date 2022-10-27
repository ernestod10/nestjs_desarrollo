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

    async findAll(params: any): Promise<Curso[]> {
        return await this.cursoRepository.find(params);
    }
    async findCurso(id: number){
        return await this.cursoRepository.findOne({where:{id:id}});
    }
    createCurso(newCurso: cursoDto): Promise<Curso> {
        return this.cursoRepository.save(newCurso);
    }
    async deleteCurso(id: string){
        return await this.cursoRepository.delete({id: parseInt(id)});
    }
    async updateCurso(id: string, newCurso: cursoDto){
        let toUpdate = await this.cursoRepository.findOne({where:{id:parseInt(id)}});
        let updated = Object.assign(toUpdate, newCurso);
        return this.cursoRepository.save(updated);
    }

    async buscarCurso(param:string){
        return await this.cursoRepository.createQueryBuilder()
        .where("tags LIKE :nombre", { nombre: `%${param}%` })
        .orWhere("categoria LIKE :nombre", { nombre: `%${param}%` })
        .getMany();
    }






}
