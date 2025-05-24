enum Cultura {
  SOJA = 'Soja',
  MILHO = 'Milho',
  CAFE = 'Café',
  ALGODAO = 'Algodão',
  TRIGO = 'Trigo',
  CANA_DE_ACUCAR = 'Cana-de-açúcar',
  OUTRA = 'OUTRA',
}

interface CulturaPlantada {
  cultura: Cultura | string;
  safra: string;
}

export interface Fazenda {
  id: string;
  nome: string;
  cidade: string;
  estado: string;
  areaTotalHA: number;
  areaAgricultavelHa: number;
  areaVegetacaoHa: number;
  CulturasPlantadas: CulturaPlantada[];
}
