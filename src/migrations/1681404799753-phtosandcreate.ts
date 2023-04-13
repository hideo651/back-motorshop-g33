import { MigrationInterface, QueryRunner } from "typeorm";

export class phtosandcreate1681404799753 implements MigrationInterface {
    name = 'phtosandcreate1681404799753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_d87d3185828c4e0fbff2675650a"`);
        await queryRunner.query(`ALTER TABLE "photos" ALTER COLUMN "announcementId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announcement" ALTER COLUMN "avatar" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_d87d3185828c4e0fbff2675650a" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_d87d3185828c4e0fbff2675650a"`);
        await queryRunner.query(`ALTER TABLE "announcement" ALTER COLUMN "avatar" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "photos" ALTER COLUMN "announcementId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_d87d3185828c4e0fbff2675650a" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
