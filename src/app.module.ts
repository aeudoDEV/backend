import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CreateProductStock } from './usecases/createProductStock';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, CreateProductStock],
})
export class AppModule {}
