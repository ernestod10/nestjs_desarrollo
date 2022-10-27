import { Entity, Column, PrimaryGeneratedColumn, OneToMany,ManyToOne, ManyToMany,JoinTable } from 'typeorm';
import { Lecture } from './lecture.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column()
  titulo: string;

  @Column('text')
  descripcion: string;

  @Column() 
  categoria: string;

  @Column()
  tags: string;

  @Column()
  estado: string;

  @OneToMany(()=> Lecture, (lecture) => lecture.curso)
  lecture: Lecture[];

  @ManyToOne(()=> Usuario, (usuario) => usuario.curso)
  profesor: Usuario;

  @ManyToMany(()=> Usuario, (usuario) => usuario.curso)
  @JoinTable()
  estudiantes: Usuario[];

}