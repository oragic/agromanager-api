import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProducerRepositoryAdapter } from 'src/Internal/Adapters/repository/producer.repository';
import { ProdutorRural } from 'src/Internal/Core/domain/Producer';
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

  @Post()
  async create(@Body() data: ProdutorRural) {
    const producer = await this.producerService.create(data);
    return producer ? producer : { message: 'Error on create Producer' };
  }

  @Put()
  async update(@Body() data: ProdutorRural) {
    const producer = await this.producerService.update(data);
    return producer ? producer : { message: 'Error on update Producer' };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removed = await this.producerService.remove(id);
    return removed ? removed : { message: 'Error on remove Producer' };
  }
}
