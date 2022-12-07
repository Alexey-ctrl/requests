import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Request } from './request.entity';
import { CreateRequestDto } from './dto/createRequest.dto';
import { UpdateRequestDto } from './dto/updateRequest.dto';
import { RequestStatusService } from '../request-status/request-status.service';
import { RequestStatus } from '../request-status/request-status.entity';
import { SetStatusDto } from './dto/setStatusDto';

@Injectable()
export class RequestService {
  constructor(
    private requestStatusService: RequestStatusService,
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
    return this.requestRepository.findByPk(id, { include: RequestStatus });
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    return this.requestRepository.update(updateRequestDto, { where: { id } });
  }

  async delete(id: number) {
    return this.requestRepository.destroy({ where: { id } });
  }

  async setStage(request: Request, stage: number, { statusId }: SetStatusDto) {
    const stageStatues = await this.requestStatusService.stageStatuses(stage);
    if (stageStatues.length === 0)
      throw new BadRequestException('Invalid stage: ' + stage);

    let newStatus;
    if (stageStatues.length === 1) newStatus = stageStatues[0];
    else newStatus = stageStatues.find((status) => status.id === statusId);

    if (!newStatus) throw new BadRequestException('Invalid statusId');
    request.statusId = newStatus.id;
    await request.save();
    return { updated: true };
  }
}
