import { ProductRepository } from '@/infrastructure/database/repositories/product.repository';
import { CreateProductDto } from '@/infrastructure/http/dtos/create-product.dto';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    constructor(@Inject() private productRepository: ProductRepository) {}

    async getAllProducts() {
        return await this.productRepository.findAll();
    }

    async getOneProduct(id: string) {
        return await this.productRepository.findOne({
            where: id,
        });
    }

    async createProduct(createProductDto: CreateProductDto) {
        return await this.productRepository.create(createProductDto);
    }

    async tagAsPaid(id: string) {
        throw new Error('Method not implemented.');
    }
}
