import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProducerEntity } from 'src/Infrastructure/entities/producer.entity';
import { ProducerRepository } from 'src/Internal/Core/port/producer';
import { ProdutorRural } from '../../Core/domain/Producer';

@Injectable()
export class ProducerTypeOrmRepository implements ProducerRepository {
  constructor(
    @InjectRepository(ProducerEntity)
    private readonly repository: Repository<ProducerEntity>,
  ) {}

  async create(data: ProdutorRural): Promise<ProdutorRural> {
    const producer = this.repository.create(data);
    return this.repository.save(producer);
  }

  async findById(id: string): Promise<ProdutorRural | null> {
    return this.repository.findOne({ where: { id } });
  }

  async update(data: ProdutorRural): Promise<ProdutorRural | null> {
    await this.repository.update(data.id, data);
    return this.findById(data.id);
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.repository.delete(id);
    return (result?.affected || 0) > 0;
  }

  async findAll(): Promise<ProdutorRural[]> {
    return this.repository.find();
  }
}
