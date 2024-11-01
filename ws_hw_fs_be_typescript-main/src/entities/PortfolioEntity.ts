import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';

import PortfolioVersionEntity from './PortfolioVersionEntity';

@ObjectType('Portfolio')
@Entity()
export default class PortfolioEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { nullable: false })
  name: string;

  @Field()
  @Column('varchar', { nullable: false, unique: true })
  url: string;

  @Field()
  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field(() => [PortfolioVersionEntity])
  @OneToMany(() => PortfolioVersionEntity, (version) => version.portfolio, { cascade: true, onDelete: 'CASCADE' })
  versions: PortfolioVersionEntity[];
}
