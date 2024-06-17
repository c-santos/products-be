import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { configService } from './infrastructure/config/config.service';
import { TransformResponseInterceptor } from './infrastructure/http/interceptors/transform-response.interceptor';

async function bootstrap() {
    const port = configService.getValue('PORT') || 8000;
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('products-be');
    app.useGlobalInterceptors(new TransformResponseInterceptor());

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Products BE')
        .setDescription('Products BE API')
        .setVersion('1.0')
        .build();

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('/api', app, swaggerDocument, {
        useGlobalPrefix: true,
    });

    app.enableCors();

    await app.listen(port);
}

bootstrap();
