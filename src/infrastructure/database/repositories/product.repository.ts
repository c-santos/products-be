import { IProductRepository } from '@/domain/interfaces/IProductRepository';
import { BaseRepository } from './base.repository';
import { ProductEntity } from '@/domain/entities/product.entity';
import { Product } from '../models/product.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class ProductRepository
    extends BaseRepository<ProductEntity, Product>
    implements IProductRepository
{
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {
        super(
            {
                entity: ProductEntity,
                model: Product,
            },
            productRepository,
            'products',
        );
    }
}
