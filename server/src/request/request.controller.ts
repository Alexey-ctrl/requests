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

@Controller()
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Get('/requests')
  async getUnbounded() {
    return this.requestService.getUnbounded();
  }

  @Get('/request/:id')
  async getById(@Param() params) {
    const request = await this.requestService.getById(params.id);
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
  async updateRecord(@Param() params, @Body() dto: UpdateRequestDto) {
    return this.requestService.update(params.id, dto);
  }

  @Delete('/request/:id')
  async deleteRecord(@Param() params) {
    return this.requestService.delete(params.id, dto);
  }
}
