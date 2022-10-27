import { Test, TestingModule } from '@nestjs/testing';
import { LeccionService } from './leccion.service';

describe('LeccionService', () => {
  let service: LeccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeccionService],
    }).compile();

    service = module.get<LeccionService>(LeccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
