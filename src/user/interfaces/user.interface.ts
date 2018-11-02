import { Document } from 'mongoose';

export interface User extends Document {
  readonly id?: string;
  readonly name:string;
  readonly surname: string;
  readonly email: string;
  readonly score: number;
}