import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDefaultSoldQuantity1718616932101 implements MigrationInterface {
    name = 'AddDefaultSoldQuantity1718616932101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "sold_quantity" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "sold_quantity" DROP DEFAULT`);
    }

}
