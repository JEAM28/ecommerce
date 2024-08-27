import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from 'class-validator';
import { Products } from 'src/Products/Products.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  /**
   * @description este parametro recibe los id de los productos
   * @example ["id", "id2", "id3"]
   */
  @IsArray()
  @ArrayMinSize(1)
  products: Partial<Products[]>;
}
