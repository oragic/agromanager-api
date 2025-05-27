import { isValidCPF, isValidCNPJ, isValidDocument } from './document.utils';

describe('document.validator', () => {
  describe('isValidCPF', () => {
    it('should return true for valid CPF format', () => {
      expect(isValidCPF('123.456.789-00')).toBe(true);
    });

    it('should return false for CPF without punctuation', () => {
      expect(isValidCPF('12345678900')).toBe(false);
    });

    it('should return false for CPF with incorrect format', () => {
      expect(isValidCPF('123.4567.89-00')).toBe(false);
    });
  });

  describe('isValidCNPJ', () => {
    it('should return true for valid CNPJ format', () => {
      expect(isValidCNPJ('12.345.678/0001-90')).toBe(true);
    });

    it('should return false for CNPJ without punctuation', () => {
      expect(isValidCNPJ('12345678000190')).toBe(false);
    });

    it('should return false for CNPJ with incorrect format', () => {
      expect(isValidCNPJ('12.3456.78/0001-90')).toBe(false);
    });
  });

  describe('isValidDocument', () => {
    it('should return true for a valid CPF', () => {
      expect(isValidDocument('123.456.789-00')).toBe(true);
    });

    it('should return true for a valid CNPJ', () => {
      expect(isValidDocument('12.345.678/0001-90')).toBe(true);
    });

    it('should return false for an invalid document format', () => {
      expect(isValidDocument('invalid-document')).toBe(false);
    });

    it('should return false for numbers without formatting', () => {
      expect(isValidDocument('12345678900')).toBe(false);
      expect(isValidDocument('12345678000190')).toBe(false);
    });
  });
});
