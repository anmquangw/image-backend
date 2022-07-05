import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, Min } from 'class-validator';

@Schema({ timestamps: true })
export class Image {
  @IsNotEmpty({ message: 'link ảnh không được bỏ trống' })
  @Prop({ required: true, minlength: 8, unique: true })
  link: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
