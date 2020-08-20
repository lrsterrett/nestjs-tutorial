import { Injectable, HttpException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Death Wish',
      brand: 'Death Wish',
      flavors: ['chocolate', 'vanilla']
    }
  ]

  findAll() {
    return this.coffees
  }

  findOne(id: string) {
    const coffee = this.coffees.find(coffee => coffee.id == +id)
    if (!coffee) {
      throw new HttpException(`Coffee #${id} not found`, 404)
    }
    return coffee
  }

  create(body: any) {
    this.coffees.push(body)
  }

  update(id: string, body: any) {
    const existingCoffee = this.findOne(id)
    if (existingCoffee) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(coffee => coffee.id == +id)
    if (coffeeIndex != -1) {
      this.coffees.splice(coffeeIndex, 1)
    }
  }
}
