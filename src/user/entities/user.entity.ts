import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'usuarios',
})
export class UserEntity extends Model {
  @ApiProperty()
  @Column
  name: string;

  @ApiProperty()
  @Column
  email: string;

  @ApiProperty()
  @Column
  password: string;
}
