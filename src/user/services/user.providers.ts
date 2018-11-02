import { Connection } from 'mongoose';
import { UserSchema } from '../schemas/user.schema';

export const UserProvider = [
  {
    provide: 'UserModelToken',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DbConnectionToken'],
  }
];