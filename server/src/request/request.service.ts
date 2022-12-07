import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Request } from './request.entity';
import { CreateRequestDto } from './dto/createRequest.dto';
import { UpdateRequestDto } from './dto/updateRequest.dto';

@Injectable()
export class RequestService {
  constructor(
    @InjectModel(Request) private requestRepository: typeof Request,
  ) {}

  async create(createRequestDto: CreateRequestDto): Promise<Request> {
    return this.requestRepository.create(createRequestDto);
  }

  async getUnbounded(): Promise<Request[]> {
    return this.requestRepository.findAll({
      where: { projectId: null },
    });
  }

  async getById(id: number) {
    return this.requestRepository.findByPk(id);
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    return this.requestRepository.update(updateRequestDto, { where: { id } });
  }

  async delete(id: number) {
    return this.requestRepository.destroy({ where: { id } });
  }
}
