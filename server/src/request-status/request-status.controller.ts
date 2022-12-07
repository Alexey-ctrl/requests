import { Controller, Get, Param } from '@nestjs/common';
import { RequestStatusService } from './request-status.service';

@Controller()
export class RequestStatusController {
  constructor(private requestStatusService: RequestStatusService) {}

  @Get('/status/stage/:stage')
  async getStageStatuses(@Param() { stage }) {
    return this.requestStatusService.stageStatuses(stage);
  }
}
