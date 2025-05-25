import { Module } from '@nestjs/common';
import { AppController } from './Interface/Http/controllers/app.controller';
import { AppService } from './app.service';
import { ProducerController } from './Interface/Http/controllers/producer.controller';
import { ProducerService } from './Internal/Core/service/producer.service';
import { ProducerRepositoryAdapter } from './Internal/Adapters/repository/producer.repository';
import { PRODUCER_REPOSITORY } from './Internal/Core/port/producer.tokens';

@Module({
  imports: [],
  controllers: [AppController, ProducerController],
  providers: [
    AppService,
    {
      provide: PRODUCER_REPOSITORY,
      useClass: ProducerRepositoryAdapter,
    },
    ProducerService,
  ],
})
export class AppModule {}
