import { Controller, Get, Param } from '@nestjs/common';
import { ProducerRepositoryAdapter } from 'src/Internal/Adapters/repository/producer.repository';
import { ProducerService } from 'src/Internal/Core/service/producer.service';

@Controller('producer')
export class ProducerController {
  private producerService = new ProducerService(
    new ProducerRepositoryAdapter(),
  );

  @Get(':id')
  async findByd(@Param('id') id: string) {
    const producer = await this.producerService.findById(id);
    return producer ? producer : { message: 'User not found' };
  }
}
