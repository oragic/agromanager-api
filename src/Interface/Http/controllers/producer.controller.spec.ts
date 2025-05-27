import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';

describe('ProducerController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/producer (POST) should create a new producer', async () => {
    const response = await request(app.getHttpServer())
      .post('/producer')
      .send({
        nome: 'New Producer',
        documento: '232.434.211-11',
        id: '04a75666-43b8-4ba3-9db9-0f1d702a9a0a',
        fazendas: [
          {
            id: 'd8f2e547-6e75-4913-8f27-78fc509030f4',
            nome: 'Test Farm',
            cidade: 'Test City',
            estado: 'PI',
            areaTotalHA: 6,
            areaAgricultavelHa: 3,
            areaVegetacaoHa: 3,
            CulturasPlantadas: [
              {
                cultura: 'Soja',
                safra: '2021',
              },
            ],
          },
        ],
        safras: ['2021'],
      });

    expect(response.status).toBe(201);
    expect(response.body.documento).toBe('232.434.211-11');

    createdId = response.body.id;
  });

  it('/producer/:id (GET) should return the created producer', async () => {
    const response = await request(app.getHttpServer()).get(`/producer/${createdId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(createdId);
    expect(response.body.nome).toBe('New Producer');
  });

  it('/producer (PUT) should update the producer', async () => {
    const response = await request(app.getHttpServer())
      .put(`/producer/${createdId}`)
      .send({
        nome: 'Updated Producer',
        documento: '232.434.211-11',
        id: createdId,
        fazendas: [
          {
            id: 'd8f2e547-6e75-4913-8f27-78fc509030f4',
            nome: 'Updated Farm',
            cidade: 'New City',
            estado: 'PI',
            areaTotalHA: 6,
            areaAgricultavelHa: 3,
            areaVegetacaoHa: 3,
            CulturasPlantadas: [
              {
                cultura: 'Milho',
                safra: '2022',
              },
            ],
          },
        ],
        safras: ['2022'],
      });

    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Updated Producer');
  });

  it('/producer/:id (DELETE) should remove the producer', async () => {
    const response = await request(app.getHttpServer()).delete(`/producer/${createdId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true });
  });
  
  it('/producer/:id (GET) should return 404 after deletion', async () => {
    const response = await request(app.getHttpServer()).get(`/producer/${createdId}`);
    expect(response.status).toBe(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
