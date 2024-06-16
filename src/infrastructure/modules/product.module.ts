import { Module } from '@nestjs/common';
import { ProductRepository } from '../database/repositories/product.repository';
import { ProductService } from '@/application/services/product.service';
import { ProductController } from '../http/controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../database/models/product.model';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductRepository, ProductService],
    controllers: [ProductController],
    exports: [],
})
export class ProductModule {}
