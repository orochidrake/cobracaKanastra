import { Module } from '@nestjs/common';
import { SlipsController } from './slips.controller';

@Module({
  controllers: [SlipsController]
})
export class SlipsModule {}
