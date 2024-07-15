import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('Page')
@Entity()
export default class PageEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { nullable: false })
  name: string;

  @Field()
  @Column('varchar', { nullable: false })
  url: string;
}
