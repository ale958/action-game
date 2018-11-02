import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserDialogFlowComponent } from './services/user.dialogflow.provider';
import { UserProvider } from './services/user.providers';
import { UserService } from './services/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [...UserProvider, UserService, UserDialogFlowComponent]
})
export class UserModule { }
