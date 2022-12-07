import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Project } from './project.entity';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [SequelizeModule.forFeature([Project])],
})
export class ProjectModule {}
