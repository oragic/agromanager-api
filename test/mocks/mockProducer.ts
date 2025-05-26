import { ProdutorRural } from '../../src/Internal/Core/domain/Producer';

export function mockProducer(
  overrides: Partial<ProdutorRural> = {},
): ProdutorRural {
  return {
    id: '12345',
    nome: 'New Name',
    documento: '123.456.789-00',
    fazendas: [
      {
        id: 'farm-001',
        nome: 'Updated Farm Name',
        cidade: 'City',
        estado: 'PI',
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
