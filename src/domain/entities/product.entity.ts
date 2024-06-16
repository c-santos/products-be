export class ProductEntity {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;

    constructor(data: Partial<ProductEntity>) {
        Object.assign(this, data);
    }

    static create(data: Partial<ProductEntity>) {
        return new ProductEntity(data);
    }
}
