import { Fazenda } from './Farm';

type Documento = string; //CPF OR CNPJ
export interface ProdutorRural {
  id: string;
  documento: Documento;
  nome: string;
  fazendas: Fazenda[];
  safras: string[];
}
