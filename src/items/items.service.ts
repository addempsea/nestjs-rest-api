import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}
  async findAll(): Promise<Item[]> {
    return this.itemModel.find({});
  }

  async findOne(id: string): Promise<Item> {
    return this.itemModel.findById(id);
  }

  async createItem(data: CreateItemDto): Promise<Item> {
    const saveItem = new this.itemModel(data);
    return saveItem.save();
  }

  async deleteOne(id: string): Promise<void> {
    await this.itemModel.findByIdAndDelete(id);
  }

  async updateItem(data: CreateItemDto, id: string): Promise<Item> {
    return this.itemModel.findByIdAndUpdate(id, data, { new: true });
  }
}
