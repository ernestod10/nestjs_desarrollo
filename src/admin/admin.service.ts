import { Injectable } from '@nestjs/common';
import {PersonaService} from '../usuarios/services/persona.service'

@Injectable()
export class AdminService  extends PersonaService {}
