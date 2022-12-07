import {
  Body,
  Controller,
  InternalServerErrorException,
  BadRequestException,
  Post,
  Get,
  Param,
  NotFoundException,
  Patch,
  Delete,
} from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/createRequest.dto';
import { ForeignKeyConstraintError } from 'sequelize';
import { UpdateRequestDto } from './dto/updateRequest.dto';
import { SetStatusDto } from './dto/setStatusDto';

@Controller()
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Get('/requests')
  async getUnbounded() {
    return this.requestService.getUnbounded();
  }

  @Get('/request/:id')
  async getById(@Param() { id }) {
    const request = await this.requestService.getById(id);
    if (!request) throw new NotFoundException();
    return request;
  }

  @Post('/request')
  async createRequest(@Body() dto: CreateRequestDto) {
    try {
      return await this.requestService.create(dto);
    } catch (error) {
      if (error instanceof ForeignKeyConstraintError) {
        throw new BadRequestException(error.message);
      }
      throw new InternalServerErrorException();
    }
  }

  @Patch('/request/:id')
  async updateRecord(@Param() { id }, @Body() dto: UpdateRequestDto) {
    return this.requestService.update(id, dto);
  }

  @Delete('/request/:id')
  async deleteRecord(@Param() { id }) {
    return this.requestService.delete(id);
  }

  @Post('/request/:id/status/next')
  async setRequestNextStatus(@Param() { id }, @Body() dto: SetStatusDto) {
    const request = await this.requestService.getById(id);
    if (!request) throw new NotFoundException('Request not found');

    const nextStage = request.status.stage + 1;
    return this.requestService.setStage(request, nextStage, dto);
  }

  @Post('/request/:id/status/prev')
  async setRequestPrevStatus(@Param() { id }, @Body() dto: SetStatusDto) {
    const request = await this.requestService.getById(id);
    if (!request) throw new NotFoundException('Request not found');

    const nextStage = request.status.stage - 1;
    return this.requestService.setStage(request, nextStage, dto);
  }

  @Post('/request/:requestId/bind/:projectId')
  async bindProject(@Param() { requestId, projectId }) {
    return this.requestService.update(requestId, { projectId });
  }

  @Post('/request/:requestId/unbind/:projectId')
  async unbindProject(@Param() { requestId, projectId }) {
    return this.requestService.update(requestId, { projectId: null });
  }
}
