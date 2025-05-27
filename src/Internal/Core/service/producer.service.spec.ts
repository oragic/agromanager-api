import { ProducerService } from './producer.service';
import { ProducerRepository } from 'src/Internal/Core/port/producer';
import { mockProducer } from '../../../../test/mocks/mockProducer';
import { NotFoundError } from '../errors/errors';
import { DomainError } from '../errors/DomainError';
import * as documentUtils from '../utils/document.utils';
import * as farmUtils from '../utils/farm.utils';

describe('ProducerService', () => {
  let producerService: ProducerService;
  let mockRepo: jest.Mocked<ProducerRepository>;

  beforeEach(() => {
    mockRepo = {
      create: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };
    producerService = new ProducerService(mockRepo);
  });

  describe('create', () => {
    it('should create a producer with valid data', async () => {
      const producer = mockProducer();
      jest.spyOn(documentUtils, 'isValidDocument').mockReturnValue(true);
      jest.spyOn(farmUtils, 'usedAreaLessThan').mockReturnValue(true);
      mockRepo.create.mockResolvedValue(producer);

      const result = await producerService.create(producer);
      expect(result).toEqual(producer);
    });

    it('should throw DomainError for invalid document', async () => {
      const producer = mockProducer();
      jest.spyOn(documentUtils, 'isValidDocument').mockReturnValue(false);

      await expect(producerService.create(producer)).rejects.toBeInstanceOf(DomainError);
    });

    it('should throw DomainError when used area exceeds total', async () => {
      const producer = mockProducer();
      jest.spyOn(documentUtils, 'isValidDocument').mockReturnValue(true);
      jest.spyOn(farmUtils, 'usedAreaLessThan').mockReturnValue(false);

      await expect(producerService.create(producer)).rejects.toBeInstanceOf(DomainError);
    });

    it('should throw DomainError if repository returns null', async () => {
      const producer = mockProducer();
      jest.spyOn(documentUtils, 'isValidDocument').mockReturnValue(true);
      jest.spyOn(farmUtils, 'usedAreaLessThan').mockReturnValue(true);
      mockRepo.create.mockResolvedValue(null);

      await expect(producerService.create(producer)).rejects.toThrow(DomainError);
    });
  });

  describe('findById', () => {
    it('should return a producer when found', async () => {
      const producer = mockProducer();
      mockRepo.findById.mockResolvedValue(producer);

      const result = await producerService.findById(producer.id);
      expect(result).toEqual(producer);
    });

    it('should throw NotFoundError if producer not found', async () => {
      mockRepo.findById.mockResolvedValue(null);

      await expect(producerService.findById('nonexistent-id')).rejects.toThrow(DomainError);
    });
  });

  describe('update', () => {
    it('should update producer with valid data', async () => {
      const producer = mockProducer();
      jest.spyOn(documentUtils, 'isValidDocument').mockReturnValue(true);
      jest.spyOn(farmUtils, 'usedAreaLessThan').mockReturnValue(true);
      mockRepo.update.mockResolvedValue(producer);

      const result = await producerService.update(producer);
      expect(result).toEqual(producer);
    });

    it('should throw DomainError for invalid document', async () => {
      const producer = mockProducer();
      jest.spyOn(documentUtils, 'isValidDocument').mockReturnValue(false);

      await expect(producerService.update(producer)).rejects.toBeInstanceOf(DomainError);
    });

    it('should throw DomainError when used area is too large', async () => {
      const producer = mockProducer();
      jest.spyOn(documentUtils, 'isValidDocument').mockReturnValue(true);
      jest.spyOn(farmUtils, 'usedAreaLessThan').mockReturnValue(false);

      await expect(producerService.update(producer)).rejects.toBeInstanceOf(DomainError);
    });

    it('should throw NotFoundError when update fails', async () => {
      const producer = mockProducer();
      jest.spyOn(documentUtils, 'isValidDocument').mockReturnValue(true);
      jest.spyOn(farmUtils, 'usedAreaLessThan').mockReturnValue(true);
      mockRepo.update.mockResolvedValue(null);

      await expect(producerService.update(producer)).rejects.toThrow(DomainError);
    });
  });

  describe('remove', () => {
    it('should return true when deletion succeeds', async () => {
      mockRepo.remove.mockResolvedValue(true);

      const result = await producerService.remove('valid-id');
      expect(result).toBe(true);
    });

    it('should throw NotFoundError if deletion fails', async () => {
      mockRepo.remove.mockResolvedValue(false);

      await expect(producerService.remove('invalid-id')).rejects.toThrow(DomainError);
    });
  });
});
