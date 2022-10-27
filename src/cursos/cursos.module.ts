import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoController } from './controllers/curso.controller';
import { LeccionController } from './controllers/leccion.controller';
import { CursoService } from './services/curso.service';
import { LeccionService } from './services/leccion.service';
import { Curso } from './curso.entity';
import { Lecture } from './Lecture.entity';
@Module({
    controllers: [CursoController, LeccionController],
    providers: [CursoService, LeccionService],
    //exports: [CursoService, LeccionService],
    imports: [TypeOrmModule.forFeature([Curso]),TypeOrmModule.forFeature([Lecture])],
})
export class CursosModule {}
