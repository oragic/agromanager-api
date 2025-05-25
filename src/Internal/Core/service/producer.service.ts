import { ProdutorRural } from '../domain/Producer';
import { ValidationError } from '../errors/errors';
import { ProducerRepository } from '../port/producer';
import { isValidDocument } from '../utils/document.utils';
export class ProducerService {
  constructor(private producerRepository: ProducerRepository) {}

  async findById(id: string): Promise<ProdutorRural | null> {
    return await this.producerRepository.findById(id);
  }

  async create(data: ProdutorRural): Promise<ProdutorRural | null> {
    if (!isValidDocument(data.documento)) {
      throw new ValidationError(`Invalid document format: ${data.documento}`);
    }
    return await this.producerRepository.create(data);
  }

  async update(data: ProdutorRural): Promise<ProdutorRural | null> {
    return await this.producerRepository.update(data);
  }

  async remove(id: string): Promise<boolean> {
    return await this.producerRepository.remove(id);
  }
}
