import { ProductEntity } from '@/domain/entities/product.entity';
import { IsDefined, IsNumber, IsString } from 'class-validator';

export class CreateProductDto implements Partial<ProductEntity> {
    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsNumber()
    price: number;

    @IsDefined()
    @IsNumber()
    quantity: number;
}
