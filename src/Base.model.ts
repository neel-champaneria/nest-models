import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';

export class Base extends Model {
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
