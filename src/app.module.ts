import { Module } from '@nestjs/common';
import { ProducerController } from './Interface/Http/controllers/producer.controller';
import { ProducerService } from './Internal/Core/service/producer.service';
import { ProducerTypeOrmRepository } from './Internal/Adapters/repository/producer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerEntity } from './Infrastructure/entities/producer.entity';
import { FarmEntity } from './Infrastructure/entities/farm.entity';
import { CropEntity } from './Infrastructure/entities/crop.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      entities: [ProducerEntity, FarmEntity, CropEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProducerEntity]),
  ],
  controllers: [ProducerController],
  providers: [
    {
      provide: 'ProducerRepository',
      useClass: ProducerTypeOrmRepository,
    },
    ProducerService,
  ],
})
export class AppModule {}
