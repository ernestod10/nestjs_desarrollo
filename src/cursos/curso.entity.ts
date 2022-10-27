import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Lecture } from './lecture.entity';

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
}