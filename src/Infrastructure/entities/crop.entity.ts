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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ManyToOne(() => FarmEntity, (farm) => farm.CulturasPlantadas)
  farm: FarmEntity;
}
