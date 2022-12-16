import { IsNotEmpty,Length } from "class-validator";

export class IStockProduct {
  @IsNotEmpty({
    message:"ProductName não pode ficar vazio"
  })
  productName: string;
  @IsNotEmpty({
    message:"TypeProduct não pode ficar vazio"
  })
  typeProduct: string;
  @IsNotEmpty({
    message:"Digite um valor acima de 1"
  })
  @Length(1, 9999999)
  amountStock: number;
}
