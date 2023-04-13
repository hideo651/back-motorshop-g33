import { MigrationInterface, QueryRunner } from "typeorm";

export class createPhotos1681392079630 implements MigrationInterface {
    name = 'createPhotos1681392079630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "announcementId" uuid, CONSTRAINT "PK_5220c45b8e32d49d767b9b3d725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_d87d3185828c4e0fbff2675650a" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_d87d3185828c4e0fbff2675650a"`);
        await queryRunner.query(`DROP TABLE "photos"`);
    }

}
