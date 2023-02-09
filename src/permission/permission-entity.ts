import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';

import { Role } from '../role/role.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Generated('uuid')
  uuid: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @Column({ nullable: true })
  voided: boolean;

  @Column({ nullable: true })
  voidedBy: number;

  @Column({ nullable: true })
  voidedDate: Date;

  @Column({ nullable: true })
  voidedReason: string;

  @ManyToOne(()=> Role, (role)=> role.permissions)
  roles: Role[]
}
