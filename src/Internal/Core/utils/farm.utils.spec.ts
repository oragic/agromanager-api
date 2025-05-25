import { usedAreaLessThan } from './farm.utils';
import { Fazenda } from '../domain/Farm';

describe('usedAreaLessThan', () => {
  it('should return true if all farms have valid areas', () => {
    const farms: Fazenda[] = [
      { areaAgricultavelHa: 3, areaVegetacaoHa: 2, areaTotalHA: 6 } as Fazenda,
    ];
    expect(usedAreaLessThan(farms)).toBe(true);
  });

  it('should return false if any farm has areas exceeding total', () => {
    const farms: Fazenda[] = [
      { areaAgricultavelHa: 4, areaVegetacaoHa: 3, areaTotalHA: 6 } as Fazenda,
    ];
    expect(usedAreaLessThan(farms)).toBe(false);
  });
});
