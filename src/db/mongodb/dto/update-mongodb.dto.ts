import { PartialType } from '@nestjs/mapped-types';
import { CreateMongodbDto } from './create-mongodb.dto';

export class UpdateMongodbDto extends PartialType(CreateMongodbDto) {}
