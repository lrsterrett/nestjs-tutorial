import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Can pass name of table (if different from class name) like so @Entity('coffees')
@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}