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
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  async getAll(): Promise<ApiResponse> {
    const data = await this.itemService.findAll();
    return {
      status: 'Success',
      message: 'Successfully fetched all items',
      data
    };
  }

  @Post()
  async create(@Body() item: CreateItemDto): Promise<ApiResponse> {
    const data = await this.itemService.createItem(item);
    return {
      status: 'Success',
      message: 'Successfully created item',
      data
    };
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<ApiResponse> {
    const data = await this.itemService.findOne(id);
    return {
      status: 'Success',
      message: 'Successfully fetched item',
      data
    };
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<ApiResponse> {
    await this.itemService.deleteOne(id);
    return {
      status: 'Success',
      message: `deleted item with id: ${id}`
    };
  }

  @Put(':id')
  async updateOne(
    @Body() updateItem: CreateItemDto,
    @Param('id') id: string
  ): Promise<ApiResponse> {
    const data = await this.itemService.updateItem(updateItem, id);
    return {
      status: 'Success',
      message: 'Successfully fetched item',
      data
    };
  }
}
