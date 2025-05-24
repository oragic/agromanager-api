export function isValidCPF(cpf: string): boolean {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

export function isValidCNPJ(cnpj: string): boolean {
  return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
}

export function isValidDocument(document: string): boolean {
  return isValidCPF(document) || isValidCNPJ(document);
}
