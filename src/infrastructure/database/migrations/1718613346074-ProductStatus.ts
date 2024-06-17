import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductStatus1718613346074 implements MigrationInterface {
    name = 'ProductStatus1718613346074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."products_status_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`ALTER TABLE "products" ADD "status" "public"."products_status_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."products_status_enum"`);
    }

}
