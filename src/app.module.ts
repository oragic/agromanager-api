import { Module } from '@nestjs/common';
import { AppController } from './Interface/Http/controllers/app.controller';
import { AppService } from './app.service';
import { ProducerController } from './Interface/Http/controllers/producer.controller';
import { ProducerService } from './Internal/Core/service/producer.service';

@Module({
  imports: [],
  controllers: [AppController, ProducerController],
  providers: [AppService, ProducerService],
})
export class AppModule {}
