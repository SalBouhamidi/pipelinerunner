import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { RuntestController } from './runtest.controller';
import { GitModule } from 'src/git/git.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    GitModule
  ],
  controllers: [RuntestController],
  providers: [],
})
export class RuntestModule {}
