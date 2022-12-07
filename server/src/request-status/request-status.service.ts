import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RequestStatus } from './request-status.entity';

@Injectable()
export class RequestStatusService {
  constructor(
    @InjectModel(RequestStatus)
    private requestStatusRepository: typeof RequestStatus,
  ) {}

  async stageStatuses(stage: number) {
    return this.requestStatusRepository.findAll({ where: { stage } });
  }
}
