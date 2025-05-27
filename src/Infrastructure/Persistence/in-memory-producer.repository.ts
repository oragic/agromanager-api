import { ProdutorRural } from 'src/Internal/Core/domain/Producer';
import {
  ConflictError,
  NotFoundError,
} from '../../Internal/Core/errors/errors';

export class InMemoryProducer {
  private producers: ProdutorRural[] = [
    {
      nome: 'Any body',
      documento: '123.456.789-00',
      fazendas: [
        {
          areaAgricultavelHa: 3,
          areaVegetacaoHa: 3,
          areaTotalHA: 6,
          cidade: 'A',
          CulturasPlantadas: [
            {
              cultura: 'Cultura',
              safra: '2021',
            },
          ],
          estado: '',
          id: '',
          nome: '',
        },
      ],
      id: '123',
      safras: [''],
    },
  ];
  private find(id: string): ProdutorRural | undefined {
    return this.producers.find((p) => p.id === id);
  }

  private findIndex(id: string): number {
    return this.producers.findIndex((p) => p.id === id);
  }
  findById(id: string): ProdutorRural {
    const found = this.find(id);
    if (!found) throw new NotFoundError('Producer', id);
    return found;
  }
  create(data: ProdutorRural): ProdutorRural {
    const exists = this.find(data.id);
    if (exists)
      throw new ConflictError(`Producer with ID ${data.id} already exists.`);

    this.producers.push(data);
    return data;
  }
  update(data: ProdutorRural): ProdutorRural | null {
    const index = this.findIndex(data.id);
    if (index === -1)
      throw new NotFoundError(
        `Producer with ID ${data.id} not found for update`,
      );

    this.producers[index] = data;
    return data;
  }
  remove(id: string): boolean {
    const index = this.findIndex(id);
    if (index === -1)
      throw new NotFoundError(`Producer with ID ${id} not found for deletion`);
    this.producers.splice(index, 1);
    return true;
  }
}
