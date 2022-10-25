import { Injectable } from '@nestjs/common';
import {PersonaService} from '../persona/persona.service'
@Injectable()
export class ProfesorService<R,C>  extends PersonaService<R,C>  {}
