import { Controller,Get,Req,Res, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { LeccionService } from '../services/leccion.service';
import { Request } from 'express';
import { Lecture } from '../lecture.entity';
import { lectureDto } from '../lecturedto';
@Controller('leccion')
export class LeccionController {

    constructor(private leccionService: LeccionService) {}

    @Get('curso/:id')
    findAll(@Param('id') id:string): Promise<Lecture[]> {
        return this.leccionService.findAll(id);
    }

    @Get(':id')
    findOne(@Param('id') id:string): Promise<Lecture> {
        return this.leccionService.findLeccion(id);
    }

    @Post()
    createLeccion(@Body() newLeccion: lectureDto): Promise<Lecture> {
        return this.leccionService.createLeccion(newLeccion);
    }

    @Delete(':id')
    deleteLeccion(@Param('id') id: string): Promise<any> {
        return this.leccionService.deleteLeccion(id);
    }

    @Put(':id')
    updateLeccion(@Param('id') id: string, @Body() newLeccion: lectureDto): Promise<Lecture> {
        return this.leccionService.updateLeccion(id, newLeccion);
    }
    



}
