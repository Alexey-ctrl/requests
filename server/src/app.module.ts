import { Module } from '@nestjs/common';
import { RequestModule } from './request/request.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './project/project.module';
import { RequestStatus } from './request/requestStatus';
import { Project } from './project/project.entity';
import { Request } from './request/request.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      database: process.env.PG_DATABASE,
      host: process.env.PG_HOST,
      port: Number(process.env.PG_POST),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      models: [Request, RequestStatus, Project],
      autoLoadModels: true,
    }),
    RequestModule,
    ProjectModule,
  ],
})
export class AppModule {}
