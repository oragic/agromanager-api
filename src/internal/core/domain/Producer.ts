type Documento = string; //CPF OR CNPJ
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

interface Fazenda {
  nome: string;
  cidade: string;
  estado: string;
  areaTotalHA: number;
  areaAgricultavelHa: number;
  areaVegetacaoHa: number;
}

export interface ProdutorRural {
  documento: Documento;
  nome: string;
  fazenda: Fazenda;
  safras: string[];
  CulturasPlantadas: CulturaPlantada[];
}
