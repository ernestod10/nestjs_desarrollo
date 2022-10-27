import { Controller,Get,Req,Res, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { ProfesorService } from '../services/profesor.service';
import { Request } from 'express';
import { Usuario } from '../usuario.entity';
import { usuarioDto } from '../usuariodto';

@Controller('profesor')
export class ProfesorController {

    constructor(private profesorService: ProfesorService) {}

    @Get()
    findAll(@Req() request: Request): Promise<Usuario[]> {
        return this.profesorService.findAll(request.query);
    }

    @Get(':id')
    findProfesor(@Param('id') id: string): Promise<Usuario> {
        return this.profesorService.findUsuario(parseInt(id));
    }

    @Post()
    createProfesor(@Body() newPersona: usuarioDto): Promise<Usuario> {
        return this.profesorService.createPersona(newPersona, 'profesor');
    }

    @Delete(':id')
    deleteProfesor(@Param('id') id: string): Promise<any> {
        return this.profesorService.deletePersona(id,'profesor');
    }

    @Put(':id')
    updateProfesor(@Param('id') id: string, @Body() newPersona: usuarioDto): Promise<Usuario> {
        return this.profesorService.updatePersona(id, newPersona);
    }





}
