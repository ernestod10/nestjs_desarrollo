import { Injectable } from '@nestjs/common';
import {PersonaService} from '../services/persona.service'
@Injectable()
export class ProfesorService  extends PersonaService  {}
