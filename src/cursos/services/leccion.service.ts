import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lecture } from '../lecture.entity';
import { lectureDto } from '../lecturedto';

@Injectable()
export class LeccionService {
    constructor(
        @InjectRepository(Lecture) private leccionRepository: Repository<Lecture>,
    ){}

   async findAll(idcurso: string): Promise<Lecture[]> {
        return await this.leccionRepository.createQueryBuilder()
        .where("cursoId = :idcurso", { idcurso: idcurso })
        .getMany();
    }
    async findLeccion(id: string){
        return await this.leccionRepository.findOne({where:{id:parseInt(id)}});
    }
    
    createLeccion(newLeccion: lectureDto): Promise<Lecture> {
        return this.leccionRepository.save(newLeccion);
    }

    async deleteLeccion(id: string){
        return await this.leccionRepository.delete({id: parseInt(id)});
    }

    async updateLeccion(id: string, newLeccion: lectureDto){
        let toUpdate = await this.leccionRepository.findOne({where:{id:parseInt(id)}});
        let updated = Object.assign(toUpdate, newLeccion);
        return this.leccionRepository.save(updated);
    }




   }




