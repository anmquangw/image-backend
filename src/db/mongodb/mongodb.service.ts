import { Injectable } from '@nestjs/common';
import { CreateMongodbDto } from './dto/create-mongodb.dto';
import { UpdateMongodbDto } from './dto/update-mongodb.dto';

@Injectable()
export class MongodbService {
  create(createMongodbDto: CreateMongodbDto) {
    return 'This action adds a new mongodb';
  }

  findAll() {
    return `This action returns all mongodb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mongodb`;
  }

  update(id: number, updateMongodbDto: UpdateMongodbDto) {
    return `This action updates a #${id} mongodb`;
  }

  remove(id: number) {
    return `This action removes a #${id} mongodb`;
  }
}
