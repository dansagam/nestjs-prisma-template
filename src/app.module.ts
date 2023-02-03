import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelpModule } from 'views/help/help.module';

@Module({
  imports: [HelpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
