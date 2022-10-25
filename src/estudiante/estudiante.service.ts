import { Injectable } from '@nestjs/common';
import {PersonaService} from '../persona/persona.service'

@Injectable()
export class EstudianteService<R,C>  extends PersonaService<R,C> {


}
