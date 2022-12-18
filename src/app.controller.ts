import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IStockProduct } from './repositories/classes/stock-product-class';
import { CreateProductStock } from './usecases/createProductStock';

@Controller()
export class AppController {
  constructor(private readonly createProduct: CreateProductStock) {}

  @Get('testing')
  list(){
    return this.createProduct.list();
  }
  @Post('test')
  async create(@Body() body:IStockProduct): Promise<any> { 
    const createStock = this.createProduct.create(body)
    const productAlready = await this.createProduct.findByProduct(body.productName);

    return createStock
  }
  @Put('/test/:id')
  async update(@Param('id') id: string, @Body() body:IStockProduct){
    return await this.createProduct.update(id, body);
  }
  @Delete('/delete/:id')
  async delete(@Param('id') id: string){
    return await this.createProduct.delete(id);
  }
}
