import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) { }

  async create(createUserDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return this.getEntity(await createdUser.save());
  }

  async getAll(): Promise<User> {
    const entity = await this.userModel
      .find()
      .exec();
    return entity.map(e => this.getEntity(e));
  }

  async findById(id: string) {
    const entity = await this.userModel
      .findById(id)
      .exec();
    return this.getEntity(entity);
  }

  async findOne(condition: any) {
    const entity = await this.userModel
      .findOne(condition)
      .exec();
    return this.getEntity(entity);
  }

  async findFirstPosition() { //TODO: filter by company
    const entity = await this.userModel
      .find(
        {
          sort: {
            score: -1 //Sort by score DESC
          }
        })
      .exec();
    return this.getEntity(entity);
  }

  async update(id: string, entry: UserDto): Promise<User> {
    return this.getEntity(await this.userModel
      .findByIdAndUpdate(id, {
        name: entry.name,
        surname: entry.surname,
      }, { new: true }));

  }

  async remove(id: string): Promise<User> {
    return this.getEntity(await this.userModel.findByIdAndRemove(id));
  }

  private getEntity(entity) {
    if (!entity)
      return null;

    return {
      id: entity._id,
      name: entity.name,
      surname: entity.surname
    } as User;
  }
}
