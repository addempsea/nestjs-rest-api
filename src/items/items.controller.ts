import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item, ApiResponse } from './interfaces/item.interface';

@Controller('item')
export class ItemsController {
  constructor (private readonly itemService: ItemsService) {}

  @Get()
  async getAll(): Promise<ApiResponse> {
    const data = await this.itemService.findAll();
    return {
      status: 'Success',
      message: 'Successfully fetched all items',
      data
    }
  }

  @Post()
  async create(@Body() item: CreateItemDto): Promise<Item> {
    return this.itemService.createItem(item);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<string> {
    await this.itemService.deleteOne(id);
    return `deleted item with id: ${id}`;
  }

  @Put(':id')
  updateOne(@Body() updateItem: CreateItemDto, @Param('id') id: string): Promise<Item> {
    return this.itemService.updateItem(updateItem, id); 
  }
}
