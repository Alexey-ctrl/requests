import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/CreateProjectDto';
import { ProjectService } from './project.service';
import { UpdateProjectDto } from './dto/UpdateProject.dto';

@Controller()
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get('/projects')
  async getProjects() {
    return this.projectService.getAll();
  }

  @Get('/project/:id')
  async getProject(@Param() { id }) {
    return this.projectService.getById(id);
  }

  @Get('/project/:id/requests')
  async getProjectRequests(@Param() { id }) {
    return this.projectService.getProjectRequests(id);
  }

  @Post('/project')
  async createProject(@Body() dto: CreateProjectDto) {
    return this.projectService.create(dto);
  }

  @Patch('/project/:id')
  async updateProject(@Param() { id }, @Body() dto: UpdateProjectDto) {
    return this.projectService.update(id, dto);
  }

  @Delete('/project/:id')
  async deleteProject(@Param() { id }) {
    return this.projectService.delete(id);
  }
}
