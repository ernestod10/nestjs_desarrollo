import { Module } from '@nestjs/common';
import { CursoController } from './controllers/curso.controller';
import { LeccionController } from './controllers/leccion.controller';
import { CursoService } from './services/curso.service';
import { LeccionService } from './services/leccion.service';

@Module({
    controllers: [CursoController, LeccionController],
    providers: [CursoService, LeccionService],
    //exports: [CursoService, LeccionService],
})
export class CursosModule {}
