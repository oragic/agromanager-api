import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { FarmEntity } from './farm.entity';

@Entity('producers')
export class ProducerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  documento: string;

  @OneToMany(() => FarmEntity, (farm) => farm.producer, {
    onDelete: 'CASCADE',
    cascade: true,
    eager: true,
  })
  fazendas: FarmEntity[];

  @Column('text', { array: true, default: [] })
  safras: string[];
}
