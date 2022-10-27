import { Injectable } from '@nestjs/common';

@Injectable()
export class CursoService {

    getCurso(id:number){
        return('Curso con id: ' + id);
    }
    getCursos(){
        return '';
    }
    
    createCurso(newCurso: any, id: number){
        return newCurso;
    }
    
    deleteCurso(id: number){
        return id;
    }
    
    updateCurso(id: number, newCurso: any){
        return newCurso;
    }
}
