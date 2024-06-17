import { Column, Entity, PrimaryGeneratedColumn, W } from 'typeorm';
import { BaseModel } from './base.model';
import { ProductEntity } from '@/domain/entities/product.entity';
import { ProductStatus } from '@/domain/enums/product-status.enum';

@Entity('products')
export class Product extends BaseModel implements ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    price: number;

    @Column()
    totalQuantity: number;

    @Column()
    soldQuantity: number;

    @Column({
        type: 'enum',
        enum: ProductStatus,
        default: ProductStatus.AVAILABLE,
    })
    status: ProductStatus;
}
