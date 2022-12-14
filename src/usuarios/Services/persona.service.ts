import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario.entity';
import { usuarioDto } from '../usuariodto';
@Injectable()
export class PersonaService {
    constructor(
        @InjectRepository(Usuario) protected userRepository: Repository<Usuario>, 
      ) {}

async findAll(params: any): Promise<Usuario[]> {
    return await this.userRepository.find(params);
}
async findUsuario(id: number){
    return await this.userRepository.findOne({where:{id:id}});
}
createPersona(newPersona: usuarioDto, tipo: string): Promise<Usuario> { 
    const user = new Usuario();
    user.nombre = newPersona.nombre;
    user.apellido = newPersona.apellido;
    user.correo = newPersona.correo;
    user.clave = newPersona.clave;
    user.tipo = tipo;
    user.estado = 'activo';
    return this.userRepository.save(user);
}

async deletePersona(idu: string, type:string){
    return await this.userRepository.createQueryBuilder()
    .delete()
    .from(Usuario)
    .where("id = :id", { id: parseInt(idu) })
    .andWhere("tipo = :tipo", { tipo: type })
    .execute();
}

async updatePersona(id: string, newPersona: usuarioDto){
    let toUpdate = await this.userRepository.findOne({where:{id:parseInt(id)}});
    let updated = Object.assign(toUpdate, newPersona);
    return this.userRepository.save(updated);

}
}