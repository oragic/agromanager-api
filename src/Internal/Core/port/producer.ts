import { ProdutorRural } from '../domain/Producer';

export interface ProducerRepository {
  create(data: ProdutorRural): Promise<ProdutorRural | null>;
  //find(): Promise<ProdutorRural[]>;
  findById(id: string): Promise<ProdutorRural | null>;
  update(id: string): Promise<ProdutorRural | null>;
  remove(id: string): Promise<boolean>;
}

export interface ProducerService {
  createProducer(data: ProdutorRural): Promise<ProdutorRural>;
}
