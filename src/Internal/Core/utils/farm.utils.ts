import { Fazenda } from '../domain/Farm';

export function usedAreaLessThan(farms: Fazenda[]): boolean {
  const verify = farms.every((farm) => {
    const usedArea = farm.areaAgricultavelHa + farm.areaVegetacaoHa;
    return usedArea <= farm.areaTotalHA;
  });
  return verify;
}
