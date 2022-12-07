import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/CreateProjectDto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project) private projectRepository: typeof Project,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectRepository.create(createProjectDto);
  }
}
