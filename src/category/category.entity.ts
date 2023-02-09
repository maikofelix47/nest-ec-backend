import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  featureImg: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true})
  voided: boolean;

  @Column({ nullable: true, type: 'timestamp' })
  voidedDate: Date;

  @Column({ nullable: true})
  voidedBy: number;

  @Column({ nullable: true})
  voidedReason: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
