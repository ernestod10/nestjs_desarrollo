import { Controller,Get,Req,Res, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { EstudianteService } from '../services/estudiante.service';
import { Request } from 'express';
import { Usuario } from '../usuario.entity';
import { usuarioDto } from '../usuariodto';

@Controller('estudiantes')
export  class EstudianteController {

    constructor(private estudianteService: EstudianteService) {}

    @Get()
    findAll(@Req() request: Request): Promise<Usuario[]> {
        return this.estudianteService.findAll(request.query);
    }

    @Get(':id')
    findEstudiante(@Param('id') id: string): Promise<Usuario> {
        return this.estudianteService.findUsuario(parseInt(id));
    }

    
    @Post()
    createEstudiante(@Body() newPersona: usuarioDto): Promise<Usuario> {
        return this.estudianteService.createPersona(newPersona, 'estudiante');
    }

    @Delete(':id')
    deleteEstudiante(@Param('id') id: string): Promise<any> {
        return this.estudianteService.deletePersona(id);
    }

    @Put(':id')
    updateEstudiante(@Param('id') id: string, @Body() newPersona: usuarioDto): Promise<Usuario> {
        return this.estudianteService.updatePersona(id, newPersona);
    }
    


}
