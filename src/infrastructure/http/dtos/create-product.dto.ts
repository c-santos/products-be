import { ProductEntity } from '@/domain/entities/product.entity';
import { ProductStatus } from '@/domain/enums/product-status.enum';
import { Transform } from 'class-transformer';
import {
    IsDefined,
    IsEnum,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';

export class CreateProductDto implements Partial<ProductEntity> {
    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsNumber()
    price: number;

    @IsDefined()
    @IsNumber()
    total_quantity: number;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(ProductStatus)
    @Transform(({ value }) => {
        return ProductStatus[value]
    })
    status?: ProductStatus;
}
