import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Request } from '../request/request.entity';

interface ProjectCreationAttributes {
  name: string;
}

@Table
export class Project extends Model<Project, ProjectCreationAttributes> {
  @Column({ autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @HasMany(() => Request)
  requests: Request[];
}
