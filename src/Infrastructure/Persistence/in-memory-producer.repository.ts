import { ProdutorRural } from 'src/Internal/Core/domain/Producer';

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
  async findById(id: string): Promise<ProdutorRural | null> {
    return this.producers.find((producer) => producer.id === id) || null;
  }
}
