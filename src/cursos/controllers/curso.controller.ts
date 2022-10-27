import { Controller,Get,Req,Res, Param, Post, Body, Delete, Put }  from '@nestjs/common';
import { Request } from 'express';
import { CursoService } from '../services/curso.service';
import { Curso } from '../curso.entity';

@Controller('curso')
export class CursoController {

    constructor(private CursoService: CursoService) {}

@Get()
findAll(@Req() request: Request): Promise<Curso[]> {
    return this.CursoService.findAll(request.query);
}

@Get(':id')
findCurso(@Param('id') id: string): Promise<Curso> {
    return this.CursoService.findCurso(parseInt(id));
}

@Post()
createCurso(@Body() newCurso: Curso): Promise<Curso> {
    return this.CursoService.createCurso(newCurso);
}

@Delete(':id')
deleteCurso(@Param('id') id: string): Promise<any> {
    return this.CursoService.deleteCurso(id);
}

@Get(':busqueda')
searchCurso(@Param('busqueda' ) busqueda: string): Promise<Curso[]> {
    return this.CursoService.buscarCurso(busqueda);
}

}
