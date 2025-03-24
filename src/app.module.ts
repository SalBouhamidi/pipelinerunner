import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RuntestModule } from './runtest/runtest.module';

@Module({
  imports: [RuntestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
