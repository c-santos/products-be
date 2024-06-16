import { ProductService } from '@/application/services/product.service';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';

@Controller('products')
export class ProductController {
    constructor(
        @Inject(ProductService) private productService: ProductService,
    ) {}

    @Get()
    async getAllProducts() {
        return await this.productService.getAllProducts();
    }

    @Get(':id')
    async getOneProduct(@Param('id') id: string) {
        return await this.productService.getOneProduct(id);
    }

    @Post()
    async createProduct(@Body() createProductDto: CreateProductDto) {
        return await this.productService.createProduct(createProductDto);
    }
}
