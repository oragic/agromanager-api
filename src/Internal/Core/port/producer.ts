import { ProdutorRural } from '../domain/Producer';

export interface ProducerRepository {
  create(data: ProdutorRural): Promise<ProdutorRural | null>;
  findById(id: string): Promise<ProdutorRural | null>;
  update(data: ProdutorRural): Promise<ProdutorRural | null>;
  remove(id: string): Promise<boolean>;
}

export interface ProducerService {
  createProducer(data: ProdutorRural): Promise<ProdutorRural>;
}
