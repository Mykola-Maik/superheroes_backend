import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Superhero } from './entities/superhero.entity';

@Injectable()
export class SuperheroService {
  constructor(
    @InjectRepository(Superhero)
    private superheroRepository: Repository<Superhero>,
  ) {}

  async create(createSuperheroDto: CreateSuperheroDto): Promise<Superhero> {
    const existingHero = await this.superheroRepository.findOne({
      where: { nickname: createSuperheroDto.nickname },
    });

    if (existingHero) {
      throw new ConflictException(
        'Superhero with this nickname already exists!',
      );
    }

    const superhero = this.superheroRepository.create(createSuperheroDto);

    return this.superheroRepository.save(superhero);
  }

  async findAll(page: number = 1, limit: number = 5) {
    const [results, total] = await this.superheroRepository.findAndCount({
      order: { id: 'ASC' },
      take: limit,
      skip: (page - 1) * limit,
    });

    return {
      count: total,
      results,
    };
  }

  async findOne(id: number): Promise<Superhero> {
    const superhero = await this.superheroRepository.findOneBy({ id });

    if (!superhero) throw new NotFoundException('Superhero not found!');

    return superhero;
  }

  async update(
    id: number,
    updateSuperheroDto: UpdateSuperheroDto,
  ): Promise<Superhero> {
    const superhero = await this.findOne(id);

    if (!superhero) throw new NotFoundException('Superhero not found!');

    await this.superheroRepository.update(id, updateSuperheroDto);

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const superhero = await this.findOne(id);

    if (!superhero) throw new NotFoundException('Superhero not found!');

    await this.superheroRepository.delete(id);
  }
}
