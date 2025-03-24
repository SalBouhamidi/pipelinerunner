import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { RuntestController } from './runtest.controller';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [RuntestController],
  providers: [],
})
export class RuntestModule {}
