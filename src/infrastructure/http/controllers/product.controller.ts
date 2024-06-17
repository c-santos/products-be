import { ProductService } from '@/application/services/product.service';
import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductStatusDto } from '../dtos/update-product-status.dto';

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

    @Patch(':id')
    async updateProductStatus(
        @Param('id') id: string,
        @Body() updateProductStatusDto: UpdateProductStatusDto,
    ) {
        return await this.productService.updateStatus(
            id,
            updateProductStatusDto,
        );
    }
}
