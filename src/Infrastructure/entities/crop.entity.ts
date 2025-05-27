import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { FarmEntity } from './farm.entity';

@Entity('crops')
export class CropEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cultura: string;

  @Column()
  safra: string;

  @ManyToOne(() => FarmEntity, (farm) => farm.CulturasPlantadas, { onDelete: 'CASCADE'})
  farm: FarmEntity;
}
