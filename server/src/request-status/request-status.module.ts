import { Module } from '@nestjs/common';
import { RequestStatusService } from './request-status.service';
import { RequestStatusController } from './request-status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RequestStatus } from './request-status.entity';

@Module({
  controllers: [RequestStatusController],
  providers: [RequestStatusService],
  imports: [SequelizeModule.forFeature([RequestStatus])],
  exports: [RequestStatusService],
})
export class RequestStatusModule {}
