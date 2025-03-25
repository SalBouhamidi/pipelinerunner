import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitService } from './git/git.service';
import { GitModule } from './git/git.module';


describe('AppController', () => {
  let appController: AppController;
  let gitservice:GitService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports:[GitModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
