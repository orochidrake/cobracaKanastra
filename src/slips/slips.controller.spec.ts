import { Test, TestingModule } from '@nestjs/testing';
import { SlipsController } from './slips.controller';

describe('SlipsController', () => {
  let controller: SlipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlipsController],
    }).compile();

    controller = module.get<SlipsController>(SlipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
