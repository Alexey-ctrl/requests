import { Body, Controller, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/CreateProjectDto';
import { ProjectService } from './project.service';

@Controller()
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post('/project')
  async createProject(@Body() dto: CreateProjectDto) {
    return this.projectService.create(dto);
  }
}
