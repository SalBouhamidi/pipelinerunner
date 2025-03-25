import { Test, TestingModule } from '@nestjs/testing';
import { ReportingtestController } from './reportingtest.controller';

describe('ReportingtestController', () => {
  let controller: ReportingtestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportingtestController],
    }).compile();

    controller = module.get<ReportingtestController>(ReportingtestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
