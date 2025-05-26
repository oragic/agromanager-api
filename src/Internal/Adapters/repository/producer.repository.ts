import { InMemoryProducer } from '../../../Infrastructure/Persistence/in-memory-producer.repository';
import { ProdutorRural } from 'src/Internal/Core/domain/Producer';
import { ProducerRepository } from 'src/Internal/Core/port/producer';

export class ProducerRepositoryAdapter implements ProducerRepository {
  private repository = new InMemoryProducer();

  async findById(id: string): Promise<ProdutorRural | null> {
    return await this.repository.findById(id);
  }

  async create(data: ProdutorRural): Promise<ProdutorRural | null> {
    return await this.repository.create(data);
  }

  async update(data: ProdutorRural): Promise<ProdutorRural | null> {
    return await this.repository.update(data);
  }

  async remove(id: string): Promise<boolean> {
    return await this.repository.remove(id);
  }
}
