import { Inject, Injectable } from '@nestjs/common';
import { ProdutorRural } from '../domain/Producer';
import { NotFoundError, ValidationError } from '../errors/errors';
import { ProducerRepository } from '../port/producer';
import { isValidDocument } from '../utils/document.utils';
import { PRODUCER_REPOSITORY } from '../port/producer.tokens';
@Injectable()
export class ProducerService {
  constructor(
    @Inject(PRODUCER_REPOSITORY) private producerRepository: ProducerRepository,
  ) {}

  async findById(id: string): Promise<ProdutorRural | null> {
    const producer = await this.producerRepository.findById(id);
    if (!producer) {
      throw new NotFoundError(`Producer with ID ${id} not found`);
    }
    return producer;
  }

  async create(data: ProdutorRural): Promise<ProdutorRural | null> {
    if (!isValidDocument(data.documento)) {
      throw new ValidationError(`Invalid document format: ${data.documento}`);
    }
    const created = await this.producerRepository.create(data);
    if (!created) {
      throw new Error(`Could not create producer with ID ${data.id}`);
    }
    return created;
  }

  async update(data: ProdutorRural): Promise<ProdutorRural | null> {
    if (!isValidDocument(data.documento)) {
      throw new ValidationError(`Invalid document format: ${data.documento}`);
    }

    const updated = await this.producerRepository.update(data);
    if (!updated) {
      throw new NotFoundError(
        `Producer with ID ${data.id} not found for update`,
      );
    }
    return updated;
  }

  async remove(id: string): Promise<boolean> {
    const removed = await this.producerRepository.remove(id);
    if (!removed) {
      throw new NotFoundError(`Producer with ID ${id} not found for deletion`);
    }
    return true;
  }
}
