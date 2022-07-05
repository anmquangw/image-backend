import { Connection } from 'mongoose';
import { dbConfigs, schemaConfigs } from 'src/config/configuration';
import { ImageSchema } from './schemas/image.schema';

export const imageProviders = [
  {
    provide: schemaConfigs.IMAGE_MODEL.toString(),
    useFactory: (connection: Connection) =>
      connection.model('Image', ImageSchema),
    inject: [dbConfigs],
  },
];
