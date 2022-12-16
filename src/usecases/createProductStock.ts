import { Body, Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'src/database/prisma.service';
import { IStockProduct } from 'src/repositories/classes/stock-product-class';
import { StockProductRepo } from 'src/repositories/stock-product-repo';

@Injectable()
export class CreateProductStock implements StockProductRepo {

  constructor(private prisma: PrismaService) {}

  create(@Body() body:IStockProduct): Promise<any>
  {
    const {amountStock, productName, typeProduct} = body;
    const createTest =  this.prisma.stockProduct.create({
      data:{
        productName,
        amountStock,
        typeProduct,
      }
    })
    return createTest;
  }

  list(): Promise<any>
  {
    return  this.prisma.stockProduct.findMany()
  }
}
