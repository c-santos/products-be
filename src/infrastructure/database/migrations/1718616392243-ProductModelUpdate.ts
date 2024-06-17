import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductModelUpdate1718616392243 implements MigrationInterface {
    name = 'ProductModelUpdate1718616392243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "totalQuantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "soldQuantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "status" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "soldQuantity"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "totalQuantity"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "quantity" integer NOT NULL`);
    }

}
