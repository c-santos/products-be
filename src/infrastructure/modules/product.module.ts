import { Module } from '@nestjs/common';
import { ProductRepository } from '../database/repositories/product.repository';
import { ProductService } from '@/application/services/product.service';
import { ProductController } from '../http/controllers/product.controller';

@Module({
    imports: [],
    providers: [ProductRepository, ProductService],
    controllers: [ProductController],
    exports: [],
})
export class ProductModule {}
