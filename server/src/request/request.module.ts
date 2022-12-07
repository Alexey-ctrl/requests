import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Request } from './request.entity';
import { RequestStatusModule } from '../request-status/request-status.module';

@Module({
  controllers: [RequestController],
  providers: [RequestService],
  imports: [SequelizeModule.forFeature([Request]), RequestStatusModule],
})
export class RequestModule {}
