import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { schemaConfigs } from 'src/config/configuration';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './schemas/image.schema';

@Injectable()
export class ImageService {
  constructor(
    @Inject(schemaConfigs.IMAGE_MODEL.toString())
    private imageModel: Model<Image>,
  ) {}

  create(createImageDto: CreateImageDto) {
    return this.imageModel.create(createImageDto);
  }
  findAll() {
    return this.imageModel.find();
  }
  findOne(id: number) {
    return `This action returns a #${id} image`;
  }
  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }
  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
