import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from 'class-validator';
import { Products } from 'src/Products/Products.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;
  @ApiProperty({
    type: [Object],
    description: 'Lista de IDs de productos',
    example: [{ id: 'productId1' }, { id: 'productId2' }],
  })
  @IsArray()
  @ArrayMinSize(1)
  products: Partial<Products[]>;
}
