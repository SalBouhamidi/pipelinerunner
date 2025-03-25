import { Test, TestingModule } from '@nestjs/testing';
import { RuntestController } from './runtest.controller';
import { GitModule } from '../git/git.module';

describe('RuntestController', () => {
  let controller: RuntestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[GitModule],
      controllers: [RuntestController],
    }).compile();

    controller = module.get<RuntestController>(RuntestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
