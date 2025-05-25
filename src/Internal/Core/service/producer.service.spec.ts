import { ProducerService } from 'src/Internal/Core/service/producer.service';
import { ProducerRepository } from 'src/Internal/Core/port/producer';
import { ValidationError } from 'src/Internal/Core/errors/errors';
import { mockProducer } from 'test/mocks/mockProducer';

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

  it('should create a producer with a valid CPF', async () => {
    const producer = mockProducer();
    mockRepo.create.mockResolvedValue(producer);

    const result = await producerService.create(producer);
    expect(result).toEqual(producer);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockRepo.create).toHaveBeenCalledWith(producer);
  });

  it('should throw error for invalid CPF', async () => {
    const producer = mockProducer({ documento: '12345678900' });

    await expect(producerService.create(producer)).rejects.toThrow(
      ValidationError,
    );
  });
});
