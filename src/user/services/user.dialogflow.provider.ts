import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import {
  DialogFlowAction,
  DialogFlowFulfillmentResponse,
  DialogFlowIntent,
  DialogFlowResponse
} from 'nestjs-dialogflow';
import { UserService } from './user.service';

@Injectable()
export class UserDialogFlowComponent {
  /* Into your dialogflow account, create the appropriate intent that has to be reference in this file. */

  constructor(private userService: UserService) {
  }

  @DialogFlowAction('ask-first-position')
  public handleEventDebug(
    dialogFlowResponse: DialogFlowResponse,
  ): DialogFlowFulfillmentResponse {
    console.log('action handled');
    const firstUser = this.userService.findFirstPosition();

    return {
      fulfillmentText: `Il primo in classifica e' ${firstUser}`,
      fulfillmentMessages: [],
    };
  }
}