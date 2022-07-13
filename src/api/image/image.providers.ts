import { Connection } from 'mongoose';
import { dbConfigs, schemaConfigs } from 'src/config/configuration';
import { ImageSchema } from './schemas/image.schema';

export const imageProviders = [
  {
    provide: schemaConfigs.IMAGE_MODEL.toString(),
    useFactory: (connection: Connection) => {
      const schema = ImageSchema;
      schema.plugin(require('mongoose-unique-validator'), {
        message: 'your custom message',
      }); // or you can integrate it without the options   schema.plugin(require('mongoose-unique-validator')

      return connection.model('Image', schema);
    },
    inject: [dbConfigs],
  },
];
