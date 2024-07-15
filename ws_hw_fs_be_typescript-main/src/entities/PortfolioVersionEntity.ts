import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import PortfolioEntity from './PortfolioEntity';
import PageEntity from './PageEntity';

@ObjectType('PortfolioVersion')
@Entity()
export default class PortfolioVersionEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { nullable: true })
  type: string;

  @ManyToOne(() => PortfolioEntity, (portfolio) => portfolio.versions, { onDelete: 'CASCADE' })
  portfolio: PortfolioEntity;

  @Field(() => [PageEntity])
  @OneToMany(() => PageEntity, (page) => page.version, { eager: true, cascade: true, onDelete: 'CASCADE' })
  pages: PageEntity[];
}
