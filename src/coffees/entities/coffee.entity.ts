import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { Flavor } from './flavor.entity';

// Can pass name of table (if different from class name) like so @Entity('coffees')
@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(type => Flavor, flavor => flavor.coffees)
  flavors: string[];
}