import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialEntities1682362328750 implements MigrationInterface {
    name = 'InitialEntities1682362328750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_d87d3185828c4e0fbff2675650a"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8"`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_d87d3185828c4e0fbff2675650a" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8"`);
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_d87d3185828c4e0fbff2675650a"`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_d87d3185828c4e0fbff2675650a" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
