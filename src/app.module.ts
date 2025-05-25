import { Module } from '@nestjs/common';
import { ProducerController } from './Interface/Http/controllers/producer.controller';
import { ProducerService } from './Internal/Core/service/producer.service';
import { ProducerRepositoryAdapter } from './Internal/Adapters/repository/producer.repository';
import { PRODUCER_REPOSITORY } from './Internal/Core/port/producer.tokens';

@Module({
  imports: [],
  controllers: [ProducerController],
  providers: [
    {
      provide: PRODUCER_REPOSITORY,
      useClass: ProducerRepositoryAdapter,
    },
    ProducerService,
  ],
})
export class AppModule {}
