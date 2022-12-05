import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { Project } from '../project/project.entity';
import { RequestStatus } from './requestStatus';

interface RequestCreationAttributes {
  name: string;
  description: string;
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
  @Column({ allowNull: false })
  projectId: number;

  @BelongsTo(() => Project)
  project: Project;

  @ForeignKey(() => RequestStatus)
  @Column({ allowNull: false })
  statusId: number;

  @BelongsTo(() => RequestStatus)
  status: RequestStatus;
}
