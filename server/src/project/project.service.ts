import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/CreateProjectDto';
import { UpdateProjectDto } from './dto/UpdateProject.dto';
import { Request } from '../request/request.entity';
import { RequestStatus } from '../request-status/request-status.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project) private projectRepository: typeof Project,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectRepository.create(createProjectDto);
  }

  async getById(id: number) {
    return this.projectRepository.findByPk(id);
  }

  async getAll() {
    return this.projectRepository.findAll();
  }

  async getProjectRequests(projectId: number) {
    return this.projectRepository.findByPk(projectId, {
      include: [{ model: Request, include: [RequestStatus] }],
    });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectRepository.update(updateProjectDto, { where: { id } });
  }

  async delete(id: number) {
    return this.projectRepository.destroy({ where: { id } });
  }
}
