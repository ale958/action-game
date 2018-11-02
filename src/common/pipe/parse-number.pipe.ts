import { ArgumentMetadata, Pipe, PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class ParseNumberPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    const val = +value;
    return isNaN(val) ? undefined : val;
  }
}