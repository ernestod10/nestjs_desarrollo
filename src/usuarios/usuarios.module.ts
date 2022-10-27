import { Module } from '@nestjs/common';
import  {EstudianteController  } from './controllers/estudiante.controller';
import { ProfesorController } from './controllers/profesor.controller';
import { PersonaController } from './controllers/persona.controller';
import { EstudianteService } from './services/estudiante.service';
import { ProfesorService } from './services/profesor.service';
import { PersonaService } from './services/persona.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Curso } from '../cursos/curso.entity';


@Module({
    controllers: [EstudianteController, ProfesorController, PersonaController],
    providers: [EstudianteService, ProfesorService, PersonaService],
    imports: [TypeOrmModule.forFeature([Usuario]),
    TypeOrmModule.forFeature([Curso])],

    
    //exports: [EstudianteService, ProfesorService, PersonaService],
})
export class UsuariosModule {}
