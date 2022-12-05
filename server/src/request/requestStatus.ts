import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class RequestStatus extends Model {
  @Column({ autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ allowNull: false, unique: true })
  code: string;

  @Column({ allowNull: false, unique: true })
  name: string;

  @Column({ allowNull: false })
  stage: number;
}
