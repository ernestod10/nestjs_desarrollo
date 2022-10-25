import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaService } from './persona/persona.service';
import { PersonaController } from './persona/persona.controller';
import { CursoService } from './curso/curso.service';
import { CursoController } from './curso/curso.controller';
import { LeccionService } from './leccion/leccion.service';
import { LeccionController } from './leccion/leccion.controller';
import { EstudianteService } from './estudiante/estudiante.service';
import { EstudianteController } from './estudiante/estudiante.controller';
import { ProfesorService } from './profesor/profesor.service';
import { ProfesorController } from './profesor/profesor.controller';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [],
  controllers: [AppController, PersonaController, CursoController, LeccionController, EstudianteController, ProfesorController, AdminController],
  providers: [AppService, PersonaService, CursoService, LeccionService, EstudianteService, ProfesorService, AdminService],
})
export class AppModule {}
