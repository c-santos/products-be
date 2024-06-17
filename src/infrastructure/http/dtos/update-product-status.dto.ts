import { ProductStatus } from '@/domain/enums/product-status.enum';
import { IsDefined, IsEnum } from 'class-validator';

export class UpdateProductStatusDto {
    @IsDefined()
    @IsEnum(ProductStatus)
    status: ProductStatus;
}
