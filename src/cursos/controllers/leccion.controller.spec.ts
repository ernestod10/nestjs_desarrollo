import { Test, TestingModule } from '@nestjs/testing';
import { LeccionController } from './leccion.controller';

describe('LeccionController', () => {
  let controller: LeccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeccionController],
    }).compile();

    controller = module.get<LeccionController>(LeccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
