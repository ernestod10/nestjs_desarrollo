import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from '../config/config.service';
import { CursosModule } from './cursos/cursos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/usuario.entity';
@Module({
  imports: [
    CursosModule,
    UsuariosModule,
    TypeOrmModule.forRoot(
      configService.getTypeOrmConfig(),
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
