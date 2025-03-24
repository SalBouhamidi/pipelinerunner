import { Test, TestingModule } from '@nestjs/testing';
import { RuntestController } from './runtest.controller';

describe('RuntestController', () => {
  let controller: RuntestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RuntestController],
    }).compile();

    controller = module.get<RuntestController>(RuntestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
