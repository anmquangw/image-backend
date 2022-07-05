import { Module } from '@nestjs/common';
import { MongodbModule } from '../../db/mongodb/mongodb.module';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { imageProviders } from './image.providers';

@Module({
  imports: [MongodbModule],
  controllers: [ImageController],
  providers: [ImageService, ...imageProviders],
})
export class ImageModule {}
