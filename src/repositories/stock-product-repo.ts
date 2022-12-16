/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IStockProduct } from './classes/stock-product-class';

@Injectable()
export abstract class StockProductRepo {
    abstract create(productStock: IStockProduct):Promise<void>;
    abstract list(productStock: IStockProduct):Promise<void>;
}
