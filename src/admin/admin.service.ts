import { Injectable } from '@nestjs/common';
import {PersonaService} from '../persona/persona.service'

@Injectable()
export class AdminService<R,C>  extends PersonaService<R,C> {}
