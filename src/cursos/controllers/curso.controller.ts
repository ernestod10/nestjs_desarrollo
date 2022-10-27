import { Get, Param, ParseIntPipe } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CursoService } from '../services/curso.service';

@Controller('curso')
export class CursoController {

    constructor(private CursoService: CursoService) {}
@Get(':id')
getCurso(@Param('id', ParseIntPipe) id:number){
    return this.CursoService.getCurso(id);
}



}
