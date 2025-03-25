import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RuntestModule } from './runtest/runtest.module';
import { GitModule } from './git/git.module';

@Module({
  imports: [RuntestModule, GitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
