import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';

describe('ProducerController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/producers (POST) should create a new producer', async () => {
    const response = await request(app.getHttpServer())
      .post('/producer')
      .send({
        documento: '232.434.211-11',
        fazendas: [
          {
            areaAgricultavelHa: 3,
            areaVegetacaoHa: 3,
            areaTotalHA: 6,
            cidade: 'New city',
            CulturasPlantadas: [
              {
                cultura: 'Cultura',
                safra: '2021',
              },
            ],
            estado: '',
            id: '',
            nome: '',
          },
        ],
        id: '1234212125',
        safras: [''],
      });
    expect(response.status).toBe(201);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(response.body.documento).toBe('232.434.211-11');
  });

  afterAll(async () => {
    await app.close();
  });
});
