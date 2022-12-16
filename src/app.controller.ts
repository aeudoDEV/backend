import { Body, Controller, Get, Post } from '@nestjs/common';
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
  async create(@Body() body:IStockProduct): Promise<void> {
    const { amountStock, productName, typeProduct} = body;
    
    const createStock = this.createProduct.create({
      amountStock,
      productName,
      typeProduct
    })

    return createStock;
  }
}
