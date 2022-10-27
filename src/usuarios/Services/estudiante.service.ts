
import {PersonaService} from '../services/persona.service'
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario.entity';
import { usuarioDto } from '../usuariodto';
@Injectable()
export class EstudianteService  extends PersonaService {
    



}
