import { UserModule } from "./user/user.module";
import { RequestMethod } from "@nestjs/common/enums/request-method.enum";
import { DialogFlowModule } from "nestjs-dialogflow";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    DialogFlowModule.forRoot({
      basePath: 'web-hooks',
      postPath: 'dialog-flow'
    }), UserModule
  ],
  providers: [],
  controllers: []
})
export class ApplicationModule {}
