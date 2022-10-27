import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}