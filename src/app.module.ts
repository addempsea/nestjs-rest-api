import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema, Item } from './items/schemas/item.schema';
import { ItemsModule } from './items/item.module';
import config from './config/keys';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI),  MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }])],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService]
})
export class AppModule {};
