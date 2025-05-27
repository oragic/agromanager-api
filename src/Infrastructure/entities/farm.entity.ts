import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ProducerEntity } from './producer.entity';
import { CropEntity } from './crop.entity';

@Entity('farms')
export class FarmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column('float')
  areaTotalHA: number;

  @Column('float')
  areaAgricultavelHa: number;

  @Column('float')
  areaVegetacaoHa: number;

  @ManyToOne(() => ProducerEntity, (producer) => producer.fazendas, {onDelete: 'CASCADE'})
  producer: ProducerEntity;

  @OneToMany(() => CropEntity, (crop) => crop.farm, {
    cascade: true,
    eager: true,
  })
  CulturasPlantadas: CropEntity[];
}
