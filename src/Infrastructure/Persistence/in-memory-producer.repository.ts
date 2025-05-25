import { ProdutorRural } from 'src/Internal/Core/domain/Producer';
import { ConflictError, NotFoundError } from 'src/Internal/Core/errors/errors';

export class InMemoryProducer {
  private producers: ProdutorRural[] = [
    {
      nome: 'Any body',
      documento: '363.146.018-00',
      fazendas: [
        {
          areaAgricultavelHa: 3,
          areaVegetacaoHa: 3,
          areaTotalHA: 6,
          cidade: 'são miguel do tapuio',
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

  // eslint-disable-next-line @typescript-eslint/require-await
  async findById(id: string): Promise<ProdutorRural> {
    const found = this.producers.find((p) => p.id === id);
    if (!found) throw new NotFoundError('Producer', id);
    return found;
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async create(data: ProdutorRural): Promise<ProdutorRural> {
    const exists = this.producers.find((producer) => producer.id === data.id);
    if (exists)
      throw new ConflictError(`Producer with ID ${data.id} already exists.`);

    this.producers.push(data);
    return data;
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async update(data: ProdutorRural): Promise<ProdutorRural | null> {
    const index = this.producers.findIndex(
      (producer) => producer.id === data.id,
    );
    if (index === -1) return null;

    this.producers[index] = data;
    return data;
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async remove(id: string): Promise<boolean> {
    const index = this.producers.findIndex((producer) => producer.id === id);
    if (index === -1) return false;
    this.producers.splice(index, 1);
    return true;
  }
}
