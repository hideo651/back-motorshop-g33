import { MigrationInterface, QueryRunner } from "typeorm";

export class createAvatar1681319960697 implements MigrationInterface {
    name = 'createAvatar1681319960697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" ADD "avatar" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "avatar"`);
    }

}
