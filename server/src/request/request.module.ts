import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Request } from './request.entity';

@Module({
  controllers: [RequestController],
  providers: [RequestService],
  imports: [SequelizeModule.forFeature([Request])],
})
export class RequestModule {}
