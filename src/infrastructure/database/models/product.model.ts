import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.model';
import { ProductEntity } from '@/domain/entities/product.entity';
import { ProductStatus } from '@/domain/enums/product-status.enum';

@Entity('products')
export class Product extends BaseModel implements ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column({ type: 'enum', enum: ProductStatus })
    status: ProductStatus;
}
