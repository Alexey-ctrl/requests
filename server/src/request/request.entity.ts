import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Project } from '../project/project.entity';
import { RequestStatus } from '../request-status/request-status.entity';

interface RequestCreationAttributes {
  name: string;
  description: string;
  projectId?: number;
  statusId: number;
}

@Table
export class Request extends Model<Request, RequestCreationAttributes> {
  @Column({ autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  description: string;

  @ForeignKey(() => Project)
  @Column
  projectId: number;

  @BelongsTo(() => Project)
  project: Project;

  @ForeignKey(() => RequestStatus)
  @Column({ allowNull: false })
  statusId: number;

  @BelongsTo(() => RequestStatus)
  status: RequestStatus;
}
