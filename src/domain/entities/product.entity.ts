import { ProductStatus } from '../enums/product-status.enum';

export class ProductEntity {
    id: string;
    name: string;
    description: string;
    price: number;
    total_quantity: number;
    sold_quantity: number;
    status: ProductStatus;

    constructor(data: Partial<ProductEntity>) {
        Object.assign(this, data);
    }

    static create(data: Partial<ProductEntity>) {
        return new ProductEntity(data);
    }
}
