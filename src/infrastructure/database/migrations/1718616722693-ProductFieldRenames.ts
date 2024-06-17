import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductFieldRenames1718616722693 implements MigrationInterface {
    name = 'ProductFieldRenames1718616722693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "totalQuantity"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "soldQuantity"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "total_quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "sold_quantity" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "sold_quantity"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "total_quantity"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "soldQuantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "totalQuantity" integer NOT NULL`);
    }

}
