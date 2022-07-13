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
  async findAll() {
    return this.imageModel.find();
  }
  async findOne(id: string) {
    return this.imageModel.findById(id);
  }
  async update(updateImageDto: UpdateImageDto[]): Promise<any> {
    return this.imageModel.updateMany(updateImageDto, { upsert: true });
  }
  async remove(updateImageDto: UpdateImageDto[]): Promise<any> {
    return this.imageModel.deleteMany({ _id: { $in: updateImageDto } });
  }
}
