import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutorRural } from 'src/Internal/Core/domain/Producer';
import { ProducerService } from '../../../Internal/Core/service/producer.service';
import { DomainError } from '../../../Internal/Core/errors/DomainError';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Get(':id')
  async findByd(@Param('id') id: string) {
    try {
      const producer = await this.producerService.findById(id);
      return producer;
    } catch (error) {
      if (error instanceof DomainError && error.status === 404) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Post()
  async create(@Body() data: ProdutorRural) {
    const producer = await this.producerService.create(data);
    return producer;
  }

  @Put(':id')
  async update(@Body() data: ProdutorRural,@Param('id') id: string) {
    data.id = id;
    const producer = await this.producerService.update(data);
    return producer;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removed = await this.producerService.remove(id);
    return { success: removed };
  }
}
