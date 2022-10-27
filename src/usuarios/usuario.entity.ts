import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Curso } from '../cursos/curso.entity';
@Entity()
export class Usuario {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column() 
  correo: string;

  @Column()
  clave: string;

  @Column()
  tipo: string;

  @Column()
  estado: string;
  @OneToMany(()=> Curso, (curso) => curso.profesor)
  curso: Curso[];

}