import { ProdutorRural } from '../domain/Producer';

export interface ProducerRepository {
  create(data: ProdutorRural): Promise<ProdutorRural | null>;
  //find(): Promise<ProdutorRural[]>;
  findById(id): Promise<ProdutorRural | null>;
  //update(id): Promise<void>;
  //delete(id): Promise<void>;
}

export interface ProducerService {
  createProducer(data: ProdutorRural): Promise<ProdutorRural>;
}
