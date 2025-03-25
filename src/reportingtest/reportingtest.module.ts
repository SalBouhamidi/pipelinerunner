import { Module } from '@nestjs/common';
import { ReportingtestController } from './reportingtest.controller';

@Module({
  controllers: [ReportingtestController]
})
export class ReportingtestModule {}
