import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './src/mail/mail.service';
import { SlipsService } from './src/slips/slips.service';
import { SlipsModule } from './slips/slips.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [SlipsModule, MailModule],
  controllers: [AppController],
  providers: [AppService, MailService, SlipsService],
})
export class AppModule {}
