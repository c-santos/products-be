import { IBaseRepository } from '@/infrastructure/database/interfaces/IBaseRepository';
import { ProductEntity } from '../entities/product.entity';

export abstract class IProductRepository extends IBaseRepository<ProductEntity> {}
