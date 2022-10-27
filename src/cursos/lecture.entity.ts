import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Curso } from './curso.entity';
@Entity()
export class Lecture {
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

  @ManyToOne(()=> Curso, (curso) => curso.lecture)
  curso: Curso;
}