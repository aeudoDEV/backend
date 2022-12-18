import { Body, Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'src/database/prisma.service';
import { IStockProduct } from 'src/repositories/classes/stock-product-class';
import { StockProductRepo } from 'src/repositories/stock-product-repo';

@Injectable()
export class CreateProductStock implements StockProductRepo {

  constructor(private prisma: PrismaService) {}

  async create(data:IStockProduct): Promise<any>
  {
    const stockProductAlreadyExists = await this.prisma.stockProduct.findFirst({
      where: {
        productName: data.productName
      }
    })

    if(stockProductAlreadyExists){
       throw new Error('test')
    }

    const stockProduct = await this.prisma.stockProduct.create({
      data
    })
    return stockProduct;
  }

  list(): Promise<any>
  {
    return  this.prisma.stockProduct.findMany()
  }

  async findByProduct(name:string):Promise<any>{
    
  }
  async update(id: string, data:IStockProduct):Promise<any>{
    const test = await this.prisma.stockProduct.findUnique({
      where: {
        id
      }
    })
    if(!test){
      throw new Error('não existe')
    }
    const update = await this.prisma.stockProduct.update({
      data,
      where: {
        id
      }
    })
    return update
  }

  async delete(id: string){
    const test = await this.prisma.stockProduct.findUnique({
      where:{
        id
      }
    })
    if(!test){
      throw new Error('n existe')
    }
    return await this.prisma.stockProduct.delete({
      where:{
        id
      }
    })
  }
}
