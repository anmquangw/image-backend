import * as mongoose from 'mongoose';
import configuration, { dbConfigs } from 'src/config/configuration';

export const mongodbProviders = [
  {
    provide: dbConfigs,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(configuration()?.mongouri),
  },
];
