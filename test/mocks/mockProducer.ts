import { ProdutorRural } from '../../src/Internal/Core/domain/Producer';

export function mockProducer(
  overrides: Partial<ProdutorRural> = {},
): ProdutorRural {
  return {
    id: '090eba5f-07e5-49fe-81b9-6ed56f674f27',
    nome: 'New Name',
    documento: '123.456.789-00',
    fazendas: [
      {
        id: 'c47a9114-f2d4-43e9-a23b-a5ecdeeaf5aa',
        nome: 'Farm Name',
        cidade: 'City',
        estado: 'UF',
        areaTotalHA: 6,
        areaAgricultavelHa: 4,
        areaVegetacaoHa: 2,
        CulturasPlantadas: [
          {
            cultura: 'Cultura',
            safra: '2021',
          },
        ],
      },
    ],
    safras: ['2021'],
    ...overrides,
  };
}
